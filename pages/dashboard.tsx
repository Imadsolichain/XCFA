import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { DocumentTextIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border-t-4 border-[#2F5FDE]">
            <ClipboardDocumentListIcon className="h-10 w-10 text-[#2F5FDE]" />
            <div>
              <div className="text-2xl font-bold text-[#2F5FDE]">{contrats.length}</div>
              <div className="text-[#333333]">Contrats</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 border-t-4 border-[#2F5FDE]">
            <DocumentTextIcon className="h-10 w-10 text-[#2F5FDE]" />
            <div>
              <div className="text-2xl font-bold text-[#2F5FDE]">{conventions.length}</div>
              <div className="text-[#333333]">Conventions</div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-center border-t-4 border-[#2F5FDE]">
            <div className="text-[#333333] font-semibold mb-2">Accès rapide</div>
            <div className="flex flex-col gap-2">
              <Link href="/contrats/nouveau" className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a] transition text-center">Nouveau contrat</Link>
              <Link href="/conventions/nouvelle" className="bg-white text-[#2F5FDE] border border-[#2F5FDE] px-4 py-2 rounded font-semibold shadow hover:bg-[#E9F0FF] transition text-center">Nouvelle convention</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#333333]">Mes contrats</h2>
            <div className="bg-white rounded-xl shadow p-4">
              {loading ? 'Chargement...' : (
                <ul className="divide-y divide-[#E9F0FF]">
                  {contrats.length === 0 && <li className="py-4 text-gray-400">Aucun contrat</li>}
                  {contrats.map((c) => (
                    <li key={c.id} className="py-4 flex items-center justify-between">
                      <div>
                        <Link href={`/contrats/${c.id}`} className="text-[#2F5FDE] font-semibold hover:underline">Contrat #{c.id}</Link>
                        <span className="ml-2 text-gray-500">{c.type}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.statut === 'signé' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : 'bg-gray-200 text-gray-600'}`}>{c.statut}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#333333]">Mes conventions</h2>
            <div className="bg-white rounded-xl shadow p-4">
              {loading ? 'Chargement...' : (
                <ul className="divide-y divide-[#E9F0FF]">
                  {conventions.length === 0 && <li className="py-4 text-gray-400">Aucune convention</li>}
                  {conventions.map((c) => (
                    <li key={c.id} className="py-4 flex items-center justify-between">
                      <span className="font-semibold text-[#2F5FDE]">{c.sujet}</span>
                      <span className="text-gray-500">{new Date(c.createdAt).toLocaleDateString()}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Layout>
  );
} 