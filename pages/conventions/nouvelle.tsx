import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import Layout from '../../components/Layout';

export default function NouvelleConventionPage() {
  const { user } = useUser();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const sujet = (form.elements.namedItem('sujet') as HTMLInputElement).value;
    try {
      const res = await fetch('/api/conventions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.id, sujet, statut: 'brouillon' }),
      });
      if (!res.ok) throw new Error('Erreur lors de la création');
      setSubmitted(true);
      toast.success('Convention créée !');
      setTimeout(() => router.push('/dashboard'), 1200);
    } catch (err) {
      setError('Erreur lors de la création de la convention');
      toast.error('Erreur lors de la création de la convention');
    }
  }

  return (
    <Layout title="Nouvelle convention">
      <h1 className="text-2xl font-bold mb-4">Nouvelle convention de stage</h1>
      {submitted ? (
        <div className="p-4 bg-green-100 rounded">Convention créée !</div>
      ) : (
        <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Sujet</label>
            <input name="sujet" className="border rounded w-full p-2" required />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Créer</button>
          {error && <div className="text-red-600 mt-2">{error}</div>}
        </form>
      )}
    </Layout>
  );
}