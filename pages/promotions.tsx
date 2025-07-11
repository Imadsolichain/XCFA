import Layout from '../components/Layout';
import { UsersIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [formation, setFormation] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [statut, setStatut] = useState('');

  function handleAddPromotion(e) {
    e.preventDefault();
    setPromotions([...promotions, { nom, formation, dateDebut, statut }]);
    setNom('');
    setFormation('');
    setDateDebut('');
    setStatut('');
    setShowForm(false);
  }

  return (
    <Layout title="Promotions">
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <button
          className="flex items-center gap-2 px-5 py-2 mb-8 rounded-xl bg-[#2F5FDE] text-white font-semibold shadow hover:bg-[#1e3a8a] transition"
          onClick={() => setShowForm(v => !v)}
        >
          <PlusCircleIcon className="h-6 w-6" /> Créer une promotion
        </button>
        {showForm && (
          <form onSubmit={handleAddPromotion} className="bg-white rounded-xl shadow p-6 mb-8 flex flex-col gap-4 w-full max-w-md border border-[#E9F0FF]">
            <input
              type="text"
              placeholder="Nom de la promotion"
              value={nom}
              onChange={e => setNom(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Formation"
              value={formation}
              onChange={e => setFormation(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <input
              type="date"
              placeholder="Date de début"
              value={dateDebut}
              onChange={e => setDateDebut(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Statut"
              value={statut}
              onChange={e => setStatut(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <button type="submit" className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a] transition">Ajouter</button>
          </form>
        )}
        {promotions.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <UsersIcon className="h-20 w-20 text-[#2F5FDE]/30 mb-4" />
            <div className="font-bold text-xl mb-2">Aucune promotion correspondant à votre recherche</div>
            <div className="text-gray-500 mb-6">Commencez par créer une promotion pour y assigner des étudiants.</div>
          </div>
        ) : (
          <div className="w-full max-w-2xl mt-4">
            <table className="min-w-full text-sm rounded-xl overflow-hidden shadow border border-[#E9F0FF]">
              <thead>
                <tr className="bg-[#F4F6F8] text-[#333]">
                  <th className="px-4 py-2 font-semibold">Nom</th>
                  <th className="px-4 py-2 font-semibold">Formation</th>
                  <th className="px-4 py-2 font-semibold">Date de début</th>
                  <th className="px-4 py-2 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {promotions.map((p, i) => (
                  <tr key={i} className="border-b border-[#F4F6F8]">
                    <td className="px-4 py-2">{p.nom}</td>
                    <td className="px-4 py-2">{p.formation}</td>
                    <td className="px-4 py-2">{p.dateDebut}</td>
                    <td className="px-4 py-2">{p.statut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
} 