import React, { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';

const VERSEMENTS_MOCK = [
  { id: '1', contrat: 'Contrat #1', montant: 1200, statut: 'en attente' },
  { id: '2', contrat: 'Contrat #2', montant: 900, statut: 'en attente' },
  { id: '3', contrat: 'Contrat #3', montant: 1500, statut: 'récupéré' },
];

export default function RecuperationSommesPage() {
  const [versements, setVersements] = useState(VERSEMENTS_MOCK);

  async function handleRecuperer(id: string) {
    setVersements(vs => vs.map(v => v.id === id ? { ...v, statut: 'récupéré' } : v));
    toast.success('Versement récupéré (mock) !');
  }

  return (
    <Layout title="Récupération sommes">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Récupération des sommes OPCO</h1>
        <div className="bg-white rounded-xl shadow p-4">
          <ul className="divide-y divide-[#E9F0FF]">
            {versements.length === 0 && <li className="py-4 text-gray-400">Aucun versement</li>}
            {versements.map((v) => (
              <li key={v.id} className="py-4 flex items-center justify-between">
                <div>
                  <span className="text-[#2F5FDE] font-semibold">{v.contrat}</span>
                  <span className="ml-2 text-gray-500">Montant : {v.montant} €</span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs font-bold ${v.statut === 'récupéré' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : 'bg-gray-200 text-gray-600'}`}>{v.statut}</span>
                </div>
                {v.statut !== 'récupéré' && (
                  <button
                    className="text-xs text-[#2F5FDE] underline hover:text-blue-800"
                    onClick={() => handleRecuperer(v.id)}
                  >Récupérer</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
} 