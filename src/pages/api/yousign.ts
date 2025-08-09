import type { NextApiRequest, NextApiResponse } from 'next';
import { getServiceSupabaseClient, Signer } from '../../lib/supabaseClient';

const YOUSIGN_BASE_URL = 'https://api-sandbox.yousign.com/v3';

const MINIMAL_PDF_BASE64 =
  'JVBERi0xLjQKJcfsj6IKMSAwIG9iago8PC9UeXBlIC9DYXRhbG9nL1BhZ2VzIDIgMCBSID4+CmVuZG9iagoyIDAgb2JqCjw8L1R5cGUgL1BhZ2VzL0tpZHMgWzMgMCBSXS9Db3VudCAxID4+CmVuZG9iagozIDAgb2JqCjw8L1R5cGUgL1BhZ2UvTWVkaWFCb3ggWzAgMCA1OTUgODQyXS9QYXJlbnQgMiAwIFIvQ29udGVudHNbNCAwIFJdID4+CmVuZG9iago0IDAgb2JqCjw8L0xlbmd0aCA0NCA+PgpzdHJlYW0KQlQKL0YxIDIgNTAgVGYKMTAwIDcwMCBUZAooSGVsbG8gWW91c2lnbiBTYW5kYm94ISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAxMDUgMDAwMDAgbiAKMDAwMDAwMDE4OCAwMDAwMCBuIAowMDAwMDAwMzAwIDAwMDAwIG4gCjAwMDAwMDAzOTAgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDUvUm9vdCAxIDAgUj4+CnN0YXJ0eHJlZgo0OTQKJSVFT0Y=';

async function createYousignProcedure(signer: Signer) {
  const apiKey = process.env.YOUSIGN_API_KEY;
  if (!apiKey) {
    return { ok: false, error: 'Missing YOUSIGN_API_KEY' };
  }

  try {
    // 1) Upload a minimal PDF file
    const fileRes = await fetch(`${YOUSIGN_BASE_URL}/files`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Demo.pdf',
        content: MINIMAL_PDF_BASE64,
        nature: 'signable',
      }),
    });

    const fileJson = await fileRes.json();
    if (!fileRes.ok) {
      return { ok: false, error: fileJson?.message || 'Yousign file creation failed', details: fileJson };
    }

    const fileId = fileJson?.id;

    // 2) Create procedure with the signer
    const procedureRes = await fetch(`${YOUSIGN_BASE_URL}/procedures`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Signature - ${signer.firstName} ${signer.lastName}`,
        members: [
          {
            firstname: signer.firstName,
            lastname: signer.lastName,
            email: signer.email,
            fileObjects: [
              {
                file: fileId,
                page: 1,
                position: '100,500,200,550',
              },
            ],
          },
        ],
        files: [{ id: fileId }],
      }),
    });

    const procedureJson = await procedureRes.json();
    if (!procedureRes.ok) {
      return { ok: false, error: procedureJson?.message || 'Yousign procedure creation failed', details: procedureJson };
    }

    return { ok: true, data: procedureJson };
  } catch (error: any) {
    return { ok: false, error: error?.message || 'Unexpected Yousign error' };
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email } = req.body || {};
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing fields: firstName, lastName, email' });
  }

  // 1) Store signer in Supabase (best effort)
  try {
    const supabase = getServiceSupabaseClient();
    if (supabase) {
      await supabase.from('signers').insert({ first_name: firstName, last_name: lastName, email });
    }
  } catch (e) {
    // Non-blocking: ignore storage error to keep the flow
  }

  // 2) Call Yousign
  const yousign = await createYousignProcedure({ firstName, lastName, email });
  if (!yousign.ok) {
    return res.status(500).json({ status: 'error', message: yousign.error, details: yousign.details || null });
  }

  return res.status(200).json({ status: 'success', data: yousign.data });
}
