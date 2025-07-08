import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { userId, type, statut } = req.body;
  if (!userId || !type || !statut) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const contrat = await prisma.contrat.create({
    data: { userId, type, statut },
  });
  res.status(201).json(contrat);
} 