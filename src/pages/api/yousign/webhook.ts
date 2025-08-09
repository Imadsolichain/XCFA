import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'node:crypto';
import { getServiceSupabaseClient } from '../../../lib/supabaseClient';

export const config = {
  api: {
    bodyParser: false,
  },
};

function timingSafeEqual(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

async function readRawBody(req: NextApiRequest): Promise<Buffer> {
  return await new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secret = process.env.YOUSIGN_WEBHOOK_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'Missing YOUSIGN_WEBHOOK_SECRET' });
  }

  const rawBody = await readRawBody(req);
  const providedSignature = (req.headers['x-yousign-signature'] || req.headers['x-signature'] || '') as string;

  if (!providedSignature) {
    return res.status(400).json({ error: 'Missing signature header' });
  }

  // Compute HMAC SHA256 of the raw body
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(rawBody)
    .digest('hex');

  const isValid = timingSafeEqual(providedSignature, expectedSignature);

  // Parse payload
  let payload: any = null;
  try {
    payload = JSON.parse(rawBody.toString('utf8'));
  } catch (_) {
    // ignore json parse error; not critical
  }

  // Persist in Supabase (best effort)
  try {
    const supabase = getServiceSupabaseClient();
    if (supabase) {
      await supabase.from('yousign_events').insert({
        event_type: payload?.event || payload?.type || 'unknown',
        payload,
        signature_valid: isValid,
      });
    }
  } catch (_) {
    // ignore persistence errors
  }

  if (!isValid) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  return res.status(200).json({ received: true });
}
