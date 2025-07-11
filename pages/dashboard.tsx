import React, { useState } from 'react';
import Layout from '../components/Layout';
import { ClockIcon, CurrencyEuroIcon, DocumentTextIcon, ExclamationTriangleIcon, CheckCircleIcon, XCircleIcon, UserIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

const indicateurs = [
  {
    label: 'Délai moyen de contractualisation',
    value: '0 jours',
    icon: <ClockIcon className="h-7 w-7 text-[#2F5FDE]" />, color: 'text-[#2F5FDE]'
  },
  {
    label: 'Taux de contrats rompus',
    value: '0%',
    icon: <XCircleIcon className="h-7 w-7 text-[#EF4444]" />, color: 'text-[#EF4444]'
  },
  {
    label: 'Chiffre d\'affaires moyen par contrat signé',
    value: '0.00€',
    icon: <CurrencyEuroIcon className="h-7 w-7 text-[#12B76A]" />, color: 'text-[#12B76A]'
  },
  {
    label: 'Taux de conversion des contrats signés',
    value: '0%',
    icon: <CheckCircleIcon className="h-7 w-7 text-[#12B76A]" />, color: 'text-[#12B76A]'
  },
  {
    label: 'Taux de dossiers non-conformes déclarés',
    value: '0%',
    icon: <ExclamationTriangleIcon className="h-7 w-7 text-[#EF4444]" />, color: 'text-[#EF4444]'
  },
  {
    label: 'Taux de dossiers non-conformes identifiés',
    value: '0%',
    icon: <ExclamationTriangleIcon className="h-7 w-7 text-[#EF4444]" />, color: 'text-[#EF4444]'
  },
];

const mockDocuments = [
  // Données fictives pour la table
];

export default function DashboardPage() {
  const [search, setSearch] = useState('');
  const [responsable, setResponsable] = useState('');
  const [type, setType] = useState('');
  const [statut, setStatut] = useState('');

  return (
    <>
      <SignedIn>
        <Layout title="Tableau de bord">
          <div className="mb-8">
            <div className="text-gray-500 text-sm mb-2">Vos indicateurs clés du 11 juillet 2024 à aujourd'hui (1 an)</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {indicateurs.map((ind, i) => (
                <div key={i} className="bg-white rounded-2xl shadow flex items-center gap-4 p-6 border border-[#E9F0FF]">
                  <div>{ind.icon}</div>
                  <div>
                    <div className={`font-extrabold text-xl ${ind.color}`}>{ind.value}</div>
                    <div className="text-gray-600 text-sm font-medium">{ind.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-8 border border-[#E9F0FF]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <div className="text-xl font-bold text-[#333]">Documents en attente de validation</div>
              <div className="flex flex-wrap gap-2">
                <input type="text" placeholder="Rechercher" value={search} onChange={e => setSearch(e.target.value)} className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none" />
                <select value={responsable} onChange={e => setResponsable(e.target.value)} className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm">
                  <option value="">Responsable dossier</option>
                  <option value="AM">AM</option>
                </select>
                <select value={type} onChange={e => setType(e.target.value)} className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm">
                  <option value="">Type de dossier</option>
                  <option value="contrat">Contrat</option>
                  <option value="convention">Convention</option>
                </select>
                <select value={statut} onChange={e => setStatut(e.target.value)} className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm">
                  <option value="">Statut du dossier</option>
                  <option value="en attente">En attente</option>
                  <option value="validé">Validé</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-[#F4F6F8] text-[#333]">
                    <th className="px-4 py-2 font-semibold">Étudiant</th>
                    <th className="px-4 py-2 font-semibold">Entreprise</th>
                    <th className="px-4 py-2 font-semibold">Responsable dossier</th>
                    <th className="px-4 py-2 font-semibold">Statut du dossier</th>
                    <th className="px-4 py-2 font-semibold">Type de dossier</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDocuments.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-gray-400">
                        <div className="flex flex-col items-center gap-2">
                          <UserIcon className="h-12 w-12 text-[#2F5FDE]/30" />
                          <div className="font-semibold">Aucun document en attente de validation</div>
                          <div className="text-sm text-gray-400">Commencez par créer un dossier pour le voir apparaître ici.</div>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    mockDocuments.map((doc, i) => (
                      <tr key={i} className="border-b border-[#F4F6F8]">
                        <td className="px-4 py-2">{doc.etudiant}</td>
                        <td className="px-4 py-2">{doc.entreprise}</td>
                        <td className="px-4 py-2">{doc.responsable}</td>
                        <td className="px-4 py-2">{doc.statut}</td>
                        <td className="px-4 py-2">{doc.type}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Layout>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
} 