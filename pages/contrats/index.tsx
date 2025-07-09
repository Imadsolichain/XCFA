import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function ContratsListPage() {
  const [contrats, setContrats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch('/api/contrats-user');
      setContrats(await res.json());
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout title="Liste des contrats">
      <SignedIn>
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#2F5FDE]">Mes contrats</h1>
          <Link href="/contrats/nouveau" className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a] transition">Nouveau contrat</Link>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          {loading ? (
            <div className="text-gray-500">Chargement...</div>
          ) : (
            <table className="min-w-full divide-y divide-[#E9F0FF]">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-[#333333]">ID</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-[#333333]">Type</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-[#333333]">Statut</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-[#333333]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contrats.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-400 py-6">Aucun contrat</td>
                  </tr>
                )}
                {contrats.map((c) => (
                  <tr key={c.id} className="hover:bg-[#E9F0FF] transition">
                    <td className="px-4 py-2 font-semibold text-[#2F5FDE]">{c.id}</td>
                    <td className="px-4 py-2">{c.type}</td>
                    <td className="px-4 py-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.statut === 'signé' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : 'bg-gray-200 text-gray-600'}`}>{c.statut}</span>
                    </td>
                    <td className="px-4 py-2">
                      <Link href={`/contrats/${c.id}`} className="text-[#2F5FDE] hover:underline font-semibold">Voir</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Layout>
  );
} 