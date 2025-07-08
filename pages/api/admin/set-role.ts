import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { clerkUserId, role } = req.body;
  if (!clerkUserId || !role) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  try {
    const resp = await fetch(`https://api.clerk.com/v1/users/${clerkUserId}/metadata`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
      body: JSON.stringify({ public_metadata: { role } }),
    });
    if (!resp.ok) throw new Error('Clerk API error');
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update role' });
  }
} 