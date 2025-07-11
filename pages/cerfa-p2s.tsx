import React, { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';

export default function CerfaP2SPage() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    ine: '',
  });
  const [cerfas, setCerfas] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Pour la démo, on ajoute le Cerfa à la liste locale (mock)
    setCerfas(prev => [
      { ...form, id: Date.now().toString() }
    ]);
    toast.success('Cerfa généré (mock) !');
    setForm({ nom: '', prenom: '', dateNaissance: '', ine: '' });
    setSubmitting(false);
  }

  async function handleDownloadPDF(cerfa: any) {
    // Pour la démo, on génère un PDF mock (à remplacer par un vrai appel API)
    const html = `
      <html><body style='font-family:Arial;padding:40px;'>
      <h1 style='color:#2F5FDE;'>Cerfa P2S</h1>
      <div><b>Nom :</b> ${cerfa.nom}</div>
      <div><b>Prénom :</b> ${cerfa.prenom}</div>
      <div><b>Date de naissance :</b> ${cerfa.dateNaissance}</div>
      <div><b>INE :</b> ${cerfa.ine}</div>
      </body></html>
    `;
    const blob = new Blob([html], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cerfa-p2s.html';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <Layout title="Cerfa P2S">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Cerfa P2S</h1>
        <form className="bg-white rounded-xl shadow p-6 mb-8 space-y-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Nom</label>
            <input className="border rounded w-full p-2" required value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Prénom</label>
            <input className="border rounded w-full p-2" required value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Date de naissance</label>
            <input type="date" className="border rounded w-full p-2" required value={form.dateNaissance} onChange={e => setForm(f => ({ ...f, dateNaissance: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Numéro INE</label>
            <input className="border rounded w-full p-2" required value={form.ine} onChange={e => setForm(f => ({ ...f, ine: e.target.value }))} />
          </div>
          <button type="submit" className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition" disabled={submitting}>{submitting ? 'Génération...' : 'Générer PDF'}</button>
        </form>

        <h2 className="text-xl font-semibold mb-4 text-[#333]">Mes Cerfa P2S générés</h2>
        <div className="bg-white rounded-xl shadow p-4">
          <ul className="divide-y divide-[#E9F0FF]">
            {cerfas.length === 0 && <li className="py-4 text-gray-400">Aucun Cerfa généré</li>}
            {cerfas.map((c) => (
              <li key={c.id} className="py-4 flex items-center justify-between">
                <div>
                  <span className="text-[#2F5FDE] font-semibold">Cerfa P2S</span>
                  <span className="ml-2 text-gray-500">{c.nom} {c.prenom}</span>
                </div>
                <button
                  className="text-xs text-[#2F5FDE] underline hover:text-blue-800"
                  onClick={() => handleDownloadPDF(c)}
                >Télécharger PDF</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
} 