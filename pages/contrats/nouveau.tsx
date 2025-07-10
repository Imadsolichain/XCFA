import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/nextjs';
import { toast } from 'react-hot-toast';

export default function NouveauContratPage() {
  const { user } = useUser();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const type = (form.elements.namedItem('type') as HTMLInputElement).value;
    const statut = (form.elements.namedItem('statut') as HTMLInputElement).value;
    try {
      const res = await fetch('/api/contrats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id,
          email: user?.primaryEmailAddress?.emailAddress,
          firstname: user?.firstName,
          lastname: user?.lastName,
          type,
          statut,
        }),
      });
      if (!res.ok) throw new Error('Erreur lors de la création');
      setSubmitted(true);
      toast.success('Contrat créé !');
      // Génération et téléchargement du PDF
      const pdfRes = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contrat',
          data: {
            nom: user?.lastName || '',
            prenom: user?.firstName || '',
            dateDebut: new Date().toISOString().slice(0, 10),
            poste: type
          }
        })
      });
      if (pdfRes.ok) {
        const blob = await pdfRes.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contrat.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (err) {
      setError('Erreur lors de la création du contrat');
      toast.error('Erreur lors de la création du contrat');
    }
  }

  return (
    <Layout title="Nouveau contrat">
      <SignedIn>
        <h1 className="text-2xl font-bold mb-4">Nouveau contrat d'alternance</h1>
        {submitted ? (
          <div className="p-4 bg-green-100 rounded">Contrat créé !</div>
        ) : (
          <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Type</label>
              <input name="type" className="border rounded w-full p-2" required defaultValue="apprentissage" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Statut</label>
              <input name="statut" className="border rounded w-full p-2" required defaultValue="brouillon" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Créer</button>
            {error && <div className="text-red-600 mt-2">{error}</div>}
          </form>
        )}
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Layout>
  );
} 