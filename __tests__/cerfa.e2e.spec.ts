import { test, expect } from '@playwright/test';

// Ce test suppose que l'app tourne sur http://localhost:3000
// Lancez `npm run dev` avant d'exécuter ce test !

test.describe('Page Cerfa - workflow complet', () => {
  test('Génération, signature, relance, upload, historique, export', async ({ page }) => {
    await page.goto('http://localhost:3001/cerfa');

    // Vérifier le dashboard
    await expect(page.getByText('Total')).toBeVisible();
    await expect(page.getByText('Signés')).toBeVisible();
    await expect(page.getByText('En attente')).toBeVisible();
    await expect(page.getByText('Refusés')).toBeVisible();

    // Générer un nouveau Cerfa
    await page.getByPlaceholder('Nom').fill('Testeur');
    await page.getByPlaceholder('Prénom').fill('Playwright');
    await page.getByPlaceholder('Date de naissance').fill('2001-01-01');
    await page.getByPlaceholder('INE').fill('PW123456');
    await page.getByPlaceholder('SIRET').fill('12345678900000');
    await page.getByRole('button', { name: /générer cerfa/i }).click();
    await expect(page.getByText('Cerfa généré (mock) !')).toBeVisible();
    await expect(page.getByText('Testeur')).toBeVisible();

    // Ouvrir la modale "Voir"
    await page.getByRole('button', { name: /voir/i }).first().click();
    await expect(page.getByText('Détail Cerfa')).toBeVisible();
    // Vérifier le lien de signature apprenant
    await expect(page.getByText('apprenant: en attente')).toBeVisible();
    await expect(page.getByRole('link', { name: /lien de signature/i })).toBeVisible();
    // Signer en tant qu'apprenant
    await page.getByRole('button', { name: /signer \(mock\)/i }).click();
    await expect(page.getByText('Signature électronique simulée !')).toBeVisible();
    // Signer en tant qu'entreprise
    await page.getByRole('button', { name: /signer \(mock\)/i }).click();
    await expect(page.getByText('Signature électronique simulée !')).toBeVisible();
    // Signer en tant que CFA
    await page.getByRole('button', { name: /signer \(mock\)/i }).click();
    await expect(page.getByText('Signature électronique simulée !')).toBeVisible();
    // Fermer la modale
    await page.getByRole('button', { name: /×/ }).click();

    // Ouvrir la modale "Pièces"
    await page.getByRole('button', { name: /pièces/i }).first().click();
    await expect(page.getByText('Pièces jointes')).toBeVisible();
    // Uploader un fichier (mock)
    const filePath = 'test.txt';
    await page.setInputFiles('input[type="file"]', filePath);
    await expect(page.getByText('Pièce jointe uploadée !')).toBeVisible();
    await expect(page.getByText('test.txt')).toBeVisible();
    await page.getByRole('button', { name: /×/ }).click();

    // Export CSV
    await page.getByRole('button', { name: /export csv/i }).click();
    await expect(page.getByText('Export CSV généré !')).toBeVisible();
    // Export Excel
    await page.getByRole('button', { name: /export excel/i }).click();
    await expect(page.getByText('Export Excel généré (mock) !')).toBeVisible();

    // Ouvrir la modale "Historique"
    await page.getByRole('button', { name: /historique/i }).first().click();
    await expect(page.getByText('Historique')).toBeVisible();
    await expect(page.getByText(/Signé \(apprenant\)/)).toBeVisible();
    await expect(page.getByText(/Signé \(entreprise\)/)).toBeVisible();
    await expect(page.getByText(/Signé \(CFA\)/)).toBeVisible();
    await page.getByRole('button', { name: /×/ }).click();

    // Supprimer le Cerfa
    await page.getByRole('button', { name: /supprimer/i }).first().click();
    // Confirmer la suppression (mock : si confirmation JS, à adapter)
    // Ici, on suppose que la suppression se fait sans modale JS native
    await expect(page.getByText('Cerfa supprimé !')).toBeVisible();
  });
}); 