import Layout from '../components/Layout';
import { AcademicCapIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function FormationsPage() {
  const [formations, setFormations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [type, setType] = useState('');
  const [statut, setStatut] = useState('');

  function handleAddFormation(e) {
    e.preventDefault();
    setFormations([...formations, { nom, type, statut }]);
    setNom('');
    setType('');
    setStatut('');
    setShowForm(false);
  }

  return (
    <Layout title="Formations">
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <button
          className="flex items-center gap-2 px-5 py-2 mb-8 rounded-xl bg-[#2F5FDE] text-white font-semibold shadow hover:bg-[#1e3a8a] transition"
          onClick={() => setShowForm(v => !v)}
        >
          <PlusCircleIcon className="h-6 w-6" /> Créer une formation
        </button>
        {showForm && (
          <form onSubmit={handleAddFormation} className="bg-white rounded-xl shadow p-6 mb-8 flex flex-col gap-4 w-full max-w-md border border-[#E9F0FF]">
            <input
              type="text"
              placeholder="Nom de la formation"
              value={nom}
              onChange={e => setNom(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Type"
              value={type}
              onChange={e => setType(e.target.value)}
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
        {formations.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <AcademicCapIcon className="h-20 w-20 text-[#2F5FDE]/30 mb-4" />
            <div className="font-bold text-xl mb-2">Vous n'avez pas encore de formation</div>
            <div className="text-gray-500 mb-6">Commencez par créer une formation pour y assigner des promotions ainsi que des étudiants.</div>
          </div>
        ) : (
          <div className="w-full max-w-2xl mt-4">
            <table className="min-w-full text-sm rounded-xl overflow-hidden shadow border border-[#E9F0FF]">
              <thead>
                <tr className="bg-[#F4F6F8] text-[#333]">
                  <th className="px-4 py-2 font-semibold">Nom</th>
                  <th className="px-4 py-2 font-semibold">Type</th>
                  <th className="px-4 py-2 font-semibold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {formations.map((f, i) => (
                  <tr key={i} className="border-b border-[#F4F6F8]">
                    <td className="px-4 py-2">{f.nom}</td>
                    <td className="px-4 py-2">{f.type}</td>
                    <td className="px-4 py-2">{f.statut}</td>
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