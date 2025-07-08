import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { userId, sujet } = req.body;
  if (!userId || !sujet) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const convention = await prisma.convention.create({
    data: { userId, sujet },
  });
  res.status(201).json(convention);
} 