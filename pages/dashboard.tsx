import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/nextjs';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useUser();
  const [contrats, setContrats] = useState([]);
  const [conventions, setConventions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const resContrats = await fetch('/api/contrats-user');
      const resConventions = await fetch('/api/conventions-user');
      setContrats(await resContrats.json());
      setConventions(await resConventions.json());
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout title="Dashboard">
      <SignedIn>
        <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>
        <div className="mb-6">
          <Link href="/contrats/nouveau" className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Nouveau contrat</Link>
          <Link href="/conventions/nouvelle" className="bg-gray-600 text-white px-4 py-2 rounded">Nouvelle convention</Link>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mes contrats</h2>
          {loading ? 'Chargement...' : (
            <ul className="list-disc pl-6">
              {contrats.length === 0 && <li>Aucun contrat</li>}
              {contrats.map((c) => (
                <li key={c.id}>
                  <Link href={`/contrats/${c.id}`} className="text-blue-700 underline">Contrat #{c.id}</Link> — {c.type} ({c.statut})
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Mes conventions</h2>
          {loading ? 'Chargement...' : (
            <ul className="list-disc pl-6">
              {conventions.length === 0 && <li>Aucune convention</li>}
              {conventions.map((c) => (
                <li key={c.id}>
                  <span className="font-semibold">{c.sujet}</span> — {new Date(c.createdAt).toLocaleDateString()}
                </li>
              ))}
            </ul>
          )}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Layout>
  );
} 