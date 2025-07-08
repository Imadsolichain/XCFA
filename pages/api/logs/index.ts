import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { type, message, userId } = req.body;
  if (!type || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const log = await prisma.evenement.create({
    data: { type, message, userId },
  });
  res.status(201).json(log);
} 