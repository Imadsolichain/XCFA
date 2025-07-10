import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { DocumentTextIcon, ClipboardDocumentListIcon, EyeIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const { user } = useUser();
  const [contrats, setContrats] = useState([]);
  const [conventions, setConventions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [signatureLinks, setSignatureLinks] = useState({});
  const [signatureStatus, setSignatureStatus] = useState({});

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
    {(!Array.isArray(contrats) || contrats.length === 0) && <li className="py-4 text-gray-400">Aucun contrat</li>}
    {Array.isArray(contrats) && contrats.map((c) => (
      <li key={c.id} className="py-4 flex items-center justify-between">
        <div>
          <Link href={`/contrats/${c.id}`} className="text-[#2F5FDE] font-semibold hover:underline">Contrat #{c.id}</Link>
          <span className="ml-2 text-gray-500">{c.type}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.statut === 'signé' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : 'bg-gray-200 text-gray-600'}`}>{c.statut}</span>
          {/* Bouton signature électronique */}
          <button
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#12B76A] text-white font-medium text-xs hover:bg-green-700 transition border border-[#12B76A]"
            onClick={async () => {
              const res = await fetch('/api/signature', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contractId: c.id })
              });
              const data = await res.json();
              setSignatureLinks((prev) => ({ ...prev, [c.id]: data.signatureUrl }));
              setSignatureStatus((prev) => ({ ...prev, [c.id]: data.status }));
            }}
          >Signer électroniquement</button>
          {/* Affichage du lien ou statut de signature */}
          {signatureLinks[c.id] && (
            <a href={signatureLinks[c.id]} target="_blank" rel="noopener noreferrer" className="text-xs text-[#2F5FDE] underline ml-2">Lien de signature</a>
          )}
          {signatureStatus[c.id] && (
            <span className="ml-2 text-xs text-gray-500">Statut : {signatureStatus[c.id]}</span>
          )}
          {/* Boutons PDF */}
          <button
            title="Aperçu"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#E9F0FF] text-[#2F5FDE] font-medium text-xs hover:bg-[#dbeafe] transition border border-[#E9F0FF]"
            onClick={async () => {
              const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  type: 'contrat',
                  data: {
                    nom: c.lastname,
                    prenom: c.firstname,
                    dateDebut: c.dateDebut || '',
                    poste: c.type
                  }
                })
              });
              const blob = await response.blob();
              const url = window.URL.createObjectURL(blob);
              window.open(url, '_blank');
              setTimeout(() => window.URL.revokeObjectURL(url), 10000);
            }}
          >
            <EyeIcon className="w-4 h-4" /> Aperçu
          </button>
          <button
            title="Télécharger"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#2F5FDE] text-white font-medium text-xs hover:bg-[#1e3a8a] transition border border-[#2F5FDE]"
            onClick={async () => {
              const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  type: 'contrat',
                  data: {
                    nom: c.lastname,
                    prenom: c.firstname,
                    dateDebut: c.dateDebut || '',
                    poste: c.type
                  }
                })
              });
              const blob = await response.blob();
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'contrat.pdf';
              a.click();
              window.URL.revokeObjectURL(url);
            }}
          >
            <ArrowDownTrayIcon className="w-4 h-4" /> Télécharger
          </button>
        </div>
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
    {(!Array.isArray(conventions) || conventions.length === 0) && <li className="py-4 text-gray-400">Aucune convention</li>}
    {Array.isArray(conventions) && conventions.map((c) => (
      <li key={c.id} className="py-4 flex items-center justify-between">
        <span className="font-semibold text-[#2F5FDE]">{c.sujet}</span>
        <div className="flex items-center gap-3">
          <span className="text-gray-500">{new Date(c.createdAt).toLocaleDateString()}</span>
          <button
            title="Aperçu"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#E9F0FF] text-[#2F5FDE] font-medium text-xs hover:bg-[#dbeafe] transition border border-[#E9F0FF]"
            onClick={async () => {
              const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  type: 'convention',
                  data: {
                    sujet: c.sujet,
                    date: new Date(c.createdAt).toLocaleDateString(),
                    etablissement: c.etablissement || ''
                  }
                })
              });
              const blob = await response.blob();
              const url = window.URL.createObjectURL(blob);
              window.open(url, '_blank');
              setTimeout(() => window.URL.revokeObjectURL(url), 10000);
            }}
          >
            <EyeIcon className="w-4 h-4" /> Aperçu
          </button>
          <button
            title="Télécharger"
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-[#2F5FDE] text-white font-medium text-xs hover:bg-[#1e3a8a] transition border border-[#2F5FDE]"
            onClick={async () => {
              const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  type: 'convention',
                  data: {
                    sujet: c.sujet,
                    date: new Date(c.createdAt).toLocaleDateString(),
                    etablissement: c.etablissement || ''
                  }
                })
              });
              const blob = await response.blob();
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'convention.pdf';
              a.click();
              window.URL.revokeObjectURL(url);
            }}
          >
            <ArrowDownTrayIcon className="w-4 h-4" /> Télécharger
          </button>
        </div>
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