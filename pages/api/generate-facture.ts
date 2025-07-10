import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }
  const { factureId } = req.body;
  if (!factureId) return res.status(400).json({ error: 'Missing factureId' });
  const facture = await prisma.facture.findUnique({ where: { id: factureId }, include: { contrat: true } });
  if (!facture) return res.status(404).json({ error: 'Facture not found' });
  const html = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; }
          h1 { color: #2F5FDE; }
          .section { margin-bottom: 24px; }
        </style>
      </head>
      <body>
        <h1>Facture</h1>
        <div class="section"><b>Numéro :</b> ${facture.numero}</div>
        <div class="section"><b>Date :</b> ${new Date(facture.date).toLocaleDateString()}</div>
        <div class="section"><b>Montant :</b> ${facture.montant.toFixed(2)} €</div>
        <div class="section"><b>Contrat lié :</b> ${facture.contratId}</div>
        <div class="section"><b>Statut :</b> ${facture.statut}</div>
      </body>
    </html>
  `;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
  await browser.close();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename=facture-${facture.numero}.pdf`);
  res.send(pdfBuffer);
} 