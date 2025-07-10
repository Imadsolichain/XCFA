import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../lib/email';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }
  // Contrats non signés
  const contrats = await prisma.contrat.findMany({ where: { statut: { not: 'signé' } }, include: { user: true } });
  let relances = [];
  for (const c of contrats) {
    if (c.user?.email) {
      await sendEmail({
        to: c.user.email,
        subject: 'Relance signature contrat',
        text: `Merci de signer le contrat #${c.id} sur XCFA.`
      });
      relances.push({ type: 'contrat', id: c.id, email: c.user.email });
    }
  }
  // Conventions non signées
  const conventions = await prisma.convention.findMany({ where: { statut: { not: 'signé' } }, include: { user: true } });
  for (const c of conventions) {
    if (c.user?.email) {
      await sendEmail({
        to: c.user.email,
        subject: 'Relance signature convention',
        text: `Merci de signer la convention #${c.id} sur XCFA.`
      });
      relances.push({ type: 'convention', id: c.id, email: c.user.email });
    }
  }
  res.status(200).json({ relances });
} 