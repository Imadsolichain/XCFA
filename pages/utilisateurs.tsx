import Layout from '../components/Layout';
import { UserIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

export default function UtilisateursPage() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [typeCompte, setTypeCompte] = useState('');

  function handleAddUser(e) {
    e.preventDefault();
    setUsers([...users, { nom, prenom, email, typeCompte }]);
    setNom('');
    setPrenom('');
    setEmail('');
    setTypeCompte('');
    setShowForm(false);
  }

  return (
    <Layout title="Liste des utilisateurs">
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <button
          className="flex items-center gap-2 px-5 py-2 mb-8 rounded-xl bg-[#2F5FDE] text-white font-semibold shadow hover:bg-[#1e3a8a] transition"
          onClick={() => setShowForm(v => !v)}
        >
          <PlusCircleIcon className="h-6 w-6" /> Ajouter un utilisateur
        </button>
        {showForm && (
          <form onSubmit={handleAddUser} className="bg-white rounded-xl shadow p-6 mb-8 flex flex-col gap-4 w-full max-w-md border border-[#E9F0FF]">
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={e => setNom(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={e => setPrenom(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Type de compte"
              value={typeCompte}
              onChange={e => setTypeCompte(e.target.value)}
              className="px-3 py-2 rounded-lg border border-[#E9F0FF] bg-[#F4F6F8] text-sm focus:outline-none"
              required
            />
            <button type="submit" className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a] transition">Ajouter</button>
          </form>
        )}
        {users.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <UserIcon className="h-20 w-20 text-[#2F5FDE]/30 mb-4" />
            <div className="font-bold text-xl mb-2">Aucun utilisateur</div>
            <div className="text-gray-500 mb-6">Ajoutez un utilisateur pour le voir apparaître ici.</div>
          </div>
        ) : (
          <div className="w-full max-w-2xl mt-4">
            <table className="min-w-full text-sm rounded-xl overflow-hidden shadow border border-[#E9F0FF]">
              <thead>
                <tr className="bg-[#F4F6F8] text-[#333]">
                  <th className="px-4 py-2 font-semibold">Nom</th>
                  <th className="px-4 py-2 font-semibold">Prénom</th>
                  <th className="px-4 py-2 font-semibold">E-mail</th>
                  <th className="px-4 py-2 font-semibold">Type de compte</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, i) => (
                  <tr key={i} className="border-b border-[#F4F6F8]">
                    <td className="px-4 py-2">{u.nom}</td>
                    <td className="px-4 py-2">{u.prenom}</td>
                    <td className="px-4 py-2">{u.email}</td>
                    <td className="px-4 py-2">{u.typeCompte}</td>
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