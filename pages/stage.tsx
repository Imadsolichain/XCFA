import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';

export default function StagePage() {
  const [conventions, setConventions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    sujet: '',
    statut: 'brouillon',
    etablissement: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchConventions() {
      setLoading(true);
      const res = await fetch('/api/conventions-user');
      const data = await res.json();
      setConventions(Array.isArray(data) ? data.filter(c => c.userId === 'mock') : []);
      setLoading(false);
    }
    fetchConventions();
  }, [submitting]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/conventions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'mock',
          sujet: form.sujet,
          statut: form.statut,
          etablissement: form.etablissement,
        }),
      });
      if (!res.ok) throw new Error('Erreur lors de la création');
      toast.success('Convention créée !');
      setForm({ ...form, sujet: '', etablissement: '' });
    } catch (err) {
      toast.error('Erreur lors de la création de la convention');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Supprimer cette convention ?')) return;
    await fetch(`/api/conventions/${id}`, { method: 'DELETE' });
    toast.success('Convention supprimée');
    setSubmitting(true); setSubmitting(false);
  }

  return (
    <Layout title="Stage">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Gestion des conventions de stage</h1>
        <form className="bg-white rounded-xl shadow p-6 mb-8 space-y-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Sujet</label>
            <input className="border rounded w-full p-2" required value={form.sujet} onChange={e => setForm(f => ({ ...f, sujet: e.target.value }))} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Établissement</label>
            <input className="border rounded w-full p-2" required value={form.etablissement} onChange={e => setForm(f => ({ ...f, etablissement: e.target.value }))} />
          </div>
          <button type="submit" className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition" disabled={submitting}>{submitting ? 'Création...' : 'Créer la convention'}</button>
        </form>

        <h2 className="text-xl font-semibold mb-4 text-[#333]">Mes conventions de stage</h2>
        <div className="bg-white rounded-xl shadow p-4">
          {loading ? 'Chargement...' : (
            <ul className="divide-y divide-[#E9F0FF]">
              {conventions.length === 0 && <li className="py-4 text-gray-400">Aucune convention</li>}
              {conventions.map((c: any) => (
                <li key={c.id} className="py-4 flex items-center justify-between">
                  <div>
                    <span className="text-[#2F5FDE] font-semibold">Convention #{c.id}</span>
                    <span className="ml-2 text-gray-500">{c.sujet}</span>
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