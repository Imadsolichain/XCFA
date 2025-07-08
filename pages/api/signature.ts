import type { NextApiRequest, NextApiResponse } from 'next';
import { sendToYousign } from '../../lib/yousign';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { contractId } = req.body;
  if (!contractId) {
    return res.status(400).json({ error: 'Missing contractId' });
  }
  const result = await sendToYousign(contractId);
  res.status(200).json(result);
} 