import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

  if (req.method === 'GET') {
    const contrat = await prisma.contrat.findUnique({ where: { id } });
    if (!contrat) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json(contrat);
  }

  if (req.method === 'PUT') {
    const { type, statut } = req.body;
    const contrat = await prisma.contrat.update({
      where: { id },
      data: { type, statut },
    });
    return res.status(200).json(contrat);
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 