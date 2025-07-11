import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';

export default function ProfessionnalisationPage() {
  const [contrats, setContrats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    type: 'professionnalisation',
    statut: 'brouillon',
    dateDebut: '',
    dateFin: '',
    poste: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchContrats() {
      setLoading(true);
      const res = await fetch('/api/contrats-user');
      const data = await res.json();
      setContrats(Array.isArray(data) ? data.filter(c => c.type === 'professionnalisation' && c.userId === 'mock') : []);
      setLoading(false);
    }
    fetchContrats();
  }, [submitting]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contrats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'mock',
          email: 'mock@mock.com',
          firstname: 'Mock',
          lastname: 'User',
          type: form.type,
          statut: form.statut,
          dateDebut: form.dateDebut,
          dateFin: form.dateFin,
          poste: form.poste,
        }),
      });
      if (!res.ok) throw new Error('Erreur lors de la création');
      toast.success('Contrat créé !');
      setForm({ ...form, dateDebut: '', dateFin: '', poste: '' });
    } catch (err) {
      toast.error('Erreur lors de la création du contrat');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Supprimer ce contrat ?')) return;
    await fetch(`/api/contrats/${id}`, { method: 'DELETE' });
    toast.success('Contrat supprimé');
    setSubmitting(true); setSubmitting(false);
  }

  return (
    <Layout title="Professionnalisation">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Gestion des contrats de professionnalisation</h1>
        <form className="bg-white rounded-xl shadow p-6 mb-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Date de début</label>
              <input type="date" className="border rounded w-full p-2" required value={form.dateDebut} onChange={e => setForm(f => ({ ...f, dateDebut: e.target.value }))} />
            </div>
            <div>
              <label className="block mb-1 font-medium">Date de fin</label>
              <input type="date" className="border rounded w-full p-2" required value={form.dateFin} onChange={e => setForm(f => ({ ...f, dateFin: e.target.value }))} />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Poste</label>
              <input className="border rounded w-full p-2" required value={form.poste} onChange={e => setForm(f => ({ ...f, poste: e.target.value }))} />
            </div>
          </div>
          <button type="submit" className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition" disabled={submitting}>{submitting ? 'Création...' : 'Créer le contrat'}</button>
        </form>

        <h2 className="text-xl font-semibold mb-4 text-[#333]">Mes contrats de professionnalisation</h2>
        <div className="bg-white rounded-xl shadow p-4">
          {loading ? 'Chargement...' : (
            <ul className="divide-y divide-[#E9F0FF]">
              {contrats.length === 0 && <li className="py-4 text-gray-400">Aucun contrat</li>}
              {contrats.map((c: any) => (
                <li key={c.id} className="py-4 flex items-center justify-between">
                  <div>
                    <span className="text-[#2F5FDE] font-semibold">Contrat #{c.id}</span>
                    <span className="ml-2 text-gray-500">{c.poste || c.type}</span>
                    <span className={`ml-2 px-3 py-1 rounded-full text-xs font-bold ${c.statut === 'signé' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : 'bg-gray-200 text-gray-600'}`}>{c.statut}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="text-xs text-[#2F5FDE] underline hover:text-blue-800"
                      onClick={async () => {
                        const response = await fetch('/api/generate-pdf', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({
                            type: 'contrat',
                            data: {
                              nom: 'Mock',
                              prenom: 'User',
                              dateDebut: c.dateDebut,
                              poste: c.poste || c.type
                            }
                          })
                        });
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        window.open(url, '_blank');
                        setTimeout(() => window.URL.revokeObjectURL(url), 10000);
                      }}
                    >Aperçu PDF</button>
                    <button
                      className="text-xs text-green-600 underline hover:text-green-800"
                      onClick={async () => {
                        const res = await fetch('/api/signature', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ contractId: c.id })
                        });
                        const data = await res.json();
                        window.open(data.signatureUrl, '_blank');
                      }}
                    >Signer électroniquement</button>
                    <button
                      className="text-xs text-[#2F5FDE] underline hover:text-blue-800"
                      onClick={async () => {
                        // Générer une facture mock (à adapter selon logique métier)
                        const factureRes = await fetch('/api/generate-facture', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ factureId: c.id }) // à adapter si id facture différent
                        });
                        const blob = await factureRes.blob();
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'facture.pdf';
                        a.click();
                        window.URL.revokeObjectURL(url);
                      }}
                    >Générer facture</button>
                    <button
                      className="text-xs text-red-600 underline hover:text-red-800"
                      onClick={() => handleDelete(c.id)}
                    >Supprimer</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
} 