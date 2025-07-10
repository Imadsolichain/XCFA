import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }
  const { type, data } = req.body;
  let html;
  if (type === 'convention') {
    html = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            h1 { color: #2F5FDE; }
            .section { margin-bottom: 24px; }
          </style>
        </head>
        <body>
          <h1>Convention de stage</h1>
          <div class="section"><b>Sujet :</b> ${data?.sujet || '...'}</div>
          <div class="section"><b>Date :</b> ${data?.date || '...'}</div>
          <div class="section"><b>Établissement :</b> ${data?.etablissement || '...'}</div>
          <div class="section"><b>Signature :</b> ____________________</div>
        </body>
      </html>
    `;
  } else {
    html = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            h1 { color: #2F5FDE; }
            .section { margin-bottom: 24px; }
          </style>
        </head>
        <body>
          <h1>Contrat de travail</h1>
          <div class="section"><b>Nom :</b> ${data?.nom || '...'}</div>
          <div class="section"><b>Prénom :</b> ${data?.prenom || '...'}</div>
          <div class="section"><b>Date de début :</b> ${data?.dateDebut || '...'}</div>
          <div class="section"><b>Poste :</b> ${data?.poste || '...'}</div>
          <div class="section"><b>Signature :</b> ____________________</div>
        </body>
      </html>
    `;
  }
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
  await browser.close();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=contrat.pdf');
  res.send(pdfBuffer);
} 