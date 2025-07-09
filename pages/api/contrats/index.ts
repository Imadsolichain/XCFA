import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { userId, type, statut, email, firstname, lastname } = req.body;
  if (!userId || !type || !statut) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // Vérifie si l'utilisateur existe, sinon le crée
  let user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    if (!email || !firstname || !lastname) {
      return res.status(400).json({ error: 'Missing user info for creation' });
    }
    user = await prisma.user.create({
      data: {
        id: userId,
        email,
        firstname,
        lastname,
        // rôle par défaut : APPRENANT
        role: 'APPRENANT',
      },
    });
  }

  const contrat = await prisma.contrat.create({
    data: { userId, type, statut },
  });
  res.status(201).json(contrat);
} 