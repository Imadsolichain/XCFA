import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';

const CERFA_MOCK = [
  { id: '1', type: 'P2S', nom: 'Dupont', prenom: 'Jean', dateNaissance: '2000-01-01', ine: '123456A', siret: '12345678900011', date: '2024-07-10', statut: 'en attente', signataires: { apprenant: 'en attente', entreprise: 'en attente', cfa: 'en attente' }, signDates: { apprenant: '', entreprise: '', cfa: '' }, pieces: [], history: [{ date: '2024-07-10', action: 'Généré' }] },
  { id: '2', type: 'Pro-A', nom: 'Martin', prenom: 'Alice', dateNaissance: '1999-05-12', ine: '654321B', siret: '98765432100022', date: '2024-07-11', statut: 'signé', signataires: { apprenant: 'signé', entreprise: 'signé', cfa: 'signé' }, signDates: { apprenant: '2024-07-12T09:00:00.000Z', entreprise: '2024-07-12T10:00:00.000Z', cfa: '2024-07-12T11:00:00.000Z' }, pieces: ['releve-notes.pdf'], history: [{ date: '2024-07-11', action: 'Généré' }, { date: '2024-07-12', action: 'Signé (apprenant)' }, { date: '2024-07-12', action: 'Signé (entreprise)' }, { date: '2024-07-12', action: 'Signé (CFA)' }] },
];

const TYPES = ['P2S', 'Pro-A'];
const STATUTS = ['tous', 'en attente', 'signé', 'refusé'];
const PAGE_SIZE = 2;

function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR');
}

function getStats(cerfas) {
  const total = cerfas.length;
  const signes = cerfas.filter(c => c.statut === 'signé').length;
  const attente = cerfas.filter(c => c.statut === 'en attente').length;
  const refuses = cerfas.filter(c => c.statut === 'refusé').length;
  return { total, signes, attente, refuses };
}

// Ajout d'une fonction utilitaire pour générer un lien de signature mock
function getMockSignLink(cerfaId, role) {
  return `https://mock-sign.xcfa.fr/cerfa/${cerfaId}/sign/${role}`;
}

export default function CerfaPage() {
  const [tab, setTab] = useState('P2S');
  const [cerfas, setCerfas] = useState(CERFA_MOCK);
  const [form, setForm] = useState({ nom: '', prenom: '', dateNaissance: '', ine: '', siret: '' });
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filtreStatut, setFiltreStatut] = useState('tous');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [editForm, setEditForm] = useState(null);
  const [editLoading, setEditLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(null);
  const [showPieces, setShowPieces] = useState(null);
  const pieceInputRef = useRef<HTMLInputElement>(null);
  // Ajout d'un état pour la modale "Voir"
  const [viewModal, setViewModal] = useState(null);

  function handleGenerate(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setCerfas(cs => [
        { id: Date.now().toString(), type: tab, ...form, date: new Date().toISOString().slice(0, 10), statut: 'en attente', signataires: { apprenant: 'en attente', entreprise: 'en attente', cfa: 'en attente' }, signDates: { apprenant: '', entreprise: '', cfa: '' }, pieces: [], history: [{ date: new Date().toISOString().slice(0, 10), action: 'Généré' }] },
        ...cs
      ]);
      setForm({ nom: '', prenom: '', dateNaissance: '', ine: '', siret: '' });
      setLoading(false);
      toast.success('Cerfa généré (mock) !');
    }, 800);
  }

  // Modifie handleSign pour workflow séquentiel et date/heure
  function handleSign(id, who) {
    setCerfas(cs => cs.map(c => {
      if (c.id === id) {
        // Workflow séquentiel : on ne peut signer que si le précédent a signé
        const order = ['apprenant', 'entreprise', 'cfa'];
        const idx = order.indexOf(who);
        if (idx > 0 && c.signataires[order[idx - 1]] !== 'signé') {
          toast.error(`Le signataire précédent doit signer avant ${who}`);
          return c;
        }
        const newSign = { ...c.signataires, [who]: 'signé' };
        const now = new Date().toISOString();
        const allSigned = Object.values(newSign).every(s => s === 'signé');
        // Toujours garder la structure complète pour signDates
        const signDates = { ...c.signDates, [who]: now };
        return {
          ...c,
          signataires: newSign,
          signDates,
          statut: allSigned ? 'signé' : c.statut,
          history: [...(c.history || []), { date: now, action: `Signé (${who})` }]
        };
      }
      return c;
    }));
    toast.success('Signature électronique simulée !');
  }

  // Modifie handleRefuse pour workflow séquentiel et date/heure
  function handleRefuse(id, who) {
    setCerfas(cs => cs.map(c => {
      if (c.id === id) {
        // Workflow séquentiel : on ne peut refuser que si le précédent a signé
        const order = ['apprenant', 'entreprise', 'cfa'];
        const idx = order.indexOf(who);
        if (idx > 0 && c.signataires[order[idx - 1]] !== 'signé') {
          toast.error(`Le signataire précédent doit signer avant ${who}`);
          return c;
        }
        const now = new Date().toISOString();
        // Toujours garder la structure complète pour signDates
        const signDates = { ...c.signDates, [who]: now };
        return {
          ...c,
          statut: 'refusé',
          signDates,
          history: [...(c.history || []), { date: now, action: `Refusé (${who})` }]
        };
      }
      return c;
    }));
    toast('Cerfa refusé (mock)');
  }

  // Relance individuelle par acteur
  function handleRelanceSignataire(id, who) {
    setCerfas(cs => cs.map(c =>
      c.id === id ? { ...c, history: [...(c.history || []), { date: new Date().toISOString(), action: `Relance signature (${who})` }] } : c
    ));
    toast(`Relance signature envoyée à ${who} (mock)`);
  }

  function handleDelete(id) {
    if (!window.confirm('Supprimer ce Cerfa ?')) return;
    setCerfas(cs => cs.filter(c => c.id !== id));
    toast.success('Cerfa supprimé !');
  }

  function handleEdit(e) {
    e.preventDefault();
    setEditLoading(true);
    setTimeout(() => {
      setCerfas(cs => cs.map(c =>
        c.id === selected.id ? { ...c, ...editForm } : c
      ));
      setSelected({ ...selected, ...editForm });
      setEditForm(null);
      setEditLoading(false);
      toast.success('Cerfa modifié !');
    }, 800);
  }

  function handleUploadPiece(e) {
    const file = e.target.files[0];
    if (!file) return;
    setCerfas(cs => cs.map(c =>
      c.id === showPieces.id ? { ...c, pieces: [...(c.pieces || []), file.name], history: [...(c.history || []), { date: new Date().toISOString().slice(0, 10), action: `Pièce jointe ajoutée (${file.name})` }] } : c
    ));
    setShowPieces({ ...showPieces, pieces: [...(showPieces.pieces || []), file.name] });
    toast.success('Pièce jointe uploadée !');
  }

  function handleExportCSV() {
    const csv = [
      ['Type', 'Nom', 'Prénom', 'Date naissance', 'INE', 'SIRET', 'Date', 'Statut'],
      ...cerfasFiltrés.map(c => [c.type, c.nom, c.prenom, c.dateNaissance, c.ine, c.siret, c.date, c.statut])
    ].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cerfa.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success('Export CSV généré !');
  }

  function handleExportExcel() {
    toast.success('Export Excel généré (mock) !');
  }

  // Recherche, filtres, pagination
  const cerfasFiltrés = cerfas.filter(c =>
    c.type === tab &&
    (filtreStatut === 'tous' || c.statut === filtreStatut) &&
    (`${c.nom} ${c.prenom}`.toLowerCase().includes(search.toLowerCase()) || c.ine.toLowerCase().includes(search.toLowerCase()) || c.siret.toLowerCase().includes(search.toLowerCase()))
  );
  const totalPages = Math.ceil(cerfasFiltrés.length / PAGE_SIZE) || 1;
  const cerfasPage = cerfasFiltrés.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const stats = getStats(cerfas.filter(c => c.type === tab));

  return (
    <Layout title="Cerfa">
      <div className="max-w-3xl mx-auto py-12">
          {/* Dashboard Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Total</span>
              <span className="text-2xl font-bold text-[#2F5FDE]">{stats.total}</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Signés</span>
              <span className="text-2xl font-bold text-[#12B76A]">{stats.signes}</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">En attente</span>
              <span className="text-2xl font-bold text-[#2F5FDE]">{stats.attente}</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Refusés</span>
              <span className="text-2xl font-bold text-[#EF4444]">{stats.refuses}</span>
            </div>
          </div>
          {/* Graphique mock */}
          <div className="bg-white rounded-xl shadow p-4 mb-8 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Répartition des statuts (mock)</span>
            <div className="w-full h-24 flex items-end gap-4">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-[#2F5FDE]" style={{ height: `${stats.attente / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">Attente</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-[#12B76A]" style={{ height: `${stats.signes / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">Signés</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-[#EF4444]" style={{ height: `${stats.refuses / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">Refusés</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mb-8">
            {TYPES.map(t => (
              <button key={t} className={`px-4 py-2 rounded-xl font-semibold shadow ${tab === t ? 'bg-[#2F5FDE] text-white' : 'bg-[#E9F0FF] text-[#2F5FDE]'}`} onClick={() => { setTab(t); setPage(1); }}>{t}</button>
            ))}
          </div>
          <form className="bg-white rounded-xl shadow p-6 mb-8" onSubmit={handleGenerate}>
            <h2 className="text-xl font-semibold mb-4 text-[#333]">Générer un Cerfa {tab}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required className="border rounded px-2 py-1" placeholder="Nom" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} />
              <input required className="border rounded px-2 py-1" placeholder="Prénom" value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))} />
              <input required type="date" className="border rounded px-2 py-1" placeholder="Date de naissance" value={form.dateNaissance} onChange={e => setForm(f => ({ ...f, dateNaissance: e.target.value }))} />
              <input required className="border rounded px-2 py-1" placeholder="INE" value={form.ine} onChange={e => setForm(f => ({ ...f, ine: e.target.value }))} />
              <input required className="border rounded px-2 py-1" placeholder="SIRET" value={form.siret} onChange={e => setForm(f => ({ ...f, siret: e.target.value }))} />
            </div>
            <button type="submit" className="mt-4 bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition" disabled={loading}>{loading ? 'Génération...' : 'Générer Cerfa'}</button>
          </form>
          <div className="flex items-center gap-2 mb-2">
            <input type="text" className="border rounded px-2 py-1" placeholder="Recherche nom, INE, SIRET..." value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} />
            <label htmlFor="filtreStatut" className="ml-2 text-gray-700">Statut :</label>
            <select id="filtreStatut" className="border rounded px-2 py-1" value={filtreStatut} onChange={e => { setFiltreStatut(e.target.value); setPage(1); }}>
              {STATUTS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
            </select>
            <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={handleExportCSV}>Export CSV</button>
            <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={handleExportExcel}>Export Excel</button>
          </div>
          <div className="bg-white rounded-xl shadow p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-[#333]">Liste des Cerfa {tab}</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#E9F0FF]">
                  <th className="p-2 text-left">Nom</th>
                  <th className="p-2 text-left">Prénom</th>
                  <th className="p-2 text-center">Date naissance</th>
                  <th className="p-2 text-center">INE</th>
                  <th className="p-2 text-center">SIRET</th>
                  <th className="p-2 text-center">Date</th>
                  <th className="p-2 text-center">Statut</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cerfasPage.length === 0 && (
                  <tr><td colSpan={8} className="py-4 text-gray-400 text-center">Aucun Cerfa</td></tr>
                )}
                {cerfasPage.map(c => (
                  <tr key={c.id} className="border-b last:border-b-0">
                    <td className="p-2">{c.nom}</td>
                    <td className="p-2">{c.prenom}</td>
                    <td className="p-2 text-center">{formatDate(c.dateNaissance)}</td>
                    <td className="p-2 text-center">{c.ine}</td>
                    <td className="p-2 text-center">{c.siret}</td>
                    <td className="p-2 text-center">{formatDate(c.date)}</td>
                    <td className="p-2 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.statut === 'signé' ? 'bg-[#12B76A] text-white' : c.statut === 'refusé' ? 'bg-[#EF4444] text-white' : 'bg-gray-200 text-gray-600'}`}>{c.statut}</span>
                    </td>
                    <td className="p-2 text-center flex flex-col gap-1 items-center">
                      <div className="flex gap-1 flex-wrap justify-center">
                        <button className="text-xs text-[#2F5FDE] underline" onClick={() => setViewModal(c)}>Voir</button>
                        <button className="text-xs text-[#2F5FDE] underline" onClick={() => toast('Aperçu PDF mock')}>PDF</button>
                        <button className="text-xs text-[#2F5FDE] underline" onClick={() => toast('Téléchargement PDF mock')}>Télécharger</button>
                        <button className="text-xs text-[#2F5FDE] underline" onClick={() => setShowPieces(c)}>Pièces</button>
                        {c.statut === 'en attente' && <button className="text-xs text-[#12B76A] underline" onClick={() => handleSign(c.id, 'apprenant')}>Signer (apprenant)</button>}
                        {c.statut === 'en attente' && <button className="text-xs text-[#12B76A] underline" onClick={() => handleSign(c.id, 'entreprise')}>Signer (entreprise)</button>}
                        {c.statut === 'en attente' && <button className="text-xs text-[#12B76A] underline" onClick={() => handleSign(c.id, 'cfa')}>Signer (CFA)</button>}
                        {c.statut === 'en attente' && <button className="text-xs text-[#EF4444] underline" onClick={() => handleRefuse(c.id, 'apprenant')}>Refuser</button>}
                        {c.statut === 'en attente' && <button className="text-xs text-[#2F5FDE] underline" onClick={() => handleRelanceSignataire(c.id, 'apprenant')}>Relancer signature</button>}
                        <button className="text-xs text-[#2F5FDE] underline" onClick={() => setEditForm({ ...c })}>Éditer</button>
                        <button className="text-xs text-[#EF4444] underline" onClick={() => handleDelete(c.id)}>Supprimer</button>
                        <button className="text-xs text-[#2F5FDE] underline" onClick={() => setShowHistory(c)}>Historique</button>
                      </div>
                      <div className="flex gap-1 mt-1">
                        {Object.entries(c.signataires).map(([role, s]) => (
                          <span key={role} className={`px-2 py-1 rounded text-xs font-bold ${s === 'signé' ? 'bg-[#12B76A] text-white' : 'bg-gray-200 text-gray-600'}`}>{role}: {s}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Précédent</button>
                <span className="px-2 text-sm">Page {page} / {totalPages}</span>
                <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Suivant</button>
              </div>
            )}
          </div>
          {/* Modal pièces jointes */}
          {showPieces && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowPieces(null)}>&times;</button>
                <h3 className="text-xl font-bold mb-2 text-[#2F5FDE]">Pièces jointes</h3>
                <ul className="mb-4">
                  {showPieces.pieces && showPieces.pieces.length > 0 ? (
                    showPieces.pieces.map((p, i) => <li key={i} className="text-[#2F5FDE] text-xs mb-1">{p}</li>)
                  ) : <li className="text-gray-400">Aucune pièce jointe</li>}
                </ul>
                <input type="file" ref={pieceInputRef} className="hidden" onChange={handleUploadPiece} />
                <button className="bg-[#2F5FDE] text-white px-4 py-1 rounded font-semibold" onClick={() => { if (pieceInputRef.current) pieceInputRef.current.click(); }}>Uploader</button>
              </div>
            </div>
          )}
          {/* Modal édition */}
          {editForm && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <form className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative" onSubmit={handleEdit}>
                <button type="button" className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setEditForm(null)}>&times;</button>
                <h3 className="text-xl font-bold mb-4 text-[#2F5FDE]">Éditer Cerfa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required className="border rounded px-2 py-1" placeholder="Nom" value={editForm.nom} onChange={e => setEditForm(f => ({ ...f, nom: e.target.value }))} />
                  <input required className="border rounded px-2 py-1" placeholder="Prénom" value={editForm.prenom} onChange={e => setEditForm(f => ({ ...f, prenom: e.target.value }))} />
                  <input required type="date" className="border rounded px-2 py-1" value={editForm.dateNaissance} onChange={e => setEditForm(f => ({ ...f, dateNaissance: e.target.value }))} />
                  <input required className="border rounded px-2 py-1" placeholder="INE" value={editForm.ine} onChange={e => setEditForm(f => ({ ...f, ine: e.target.value }))} />
                  <input required className="border rounded px-2 py-1" placeholder="SIRET" value={editForm.siret} onChange={e => setEditForm(f => ({ ...f, siret: e.target.value }))} />
                </div>
                <button type="submit" className="mt-4 bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition w-full" disabled={editLoading}>{editLoading ? 'Enregistrement...' : 'Enregistrer'}</button>
              </form>
            </div>
          )}
          {/* Modal historique */}
          {showHistory && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowHistory(null)}>&times;</button>
                <h3 className="text-xl font-bold mb-2 text-[#2F5FDE]">Historique</h3>
                <ul className="divide-y divide-[#E9F0FF]">
                  {showHistory.history && showHistory.history.length > 0 ? (
                    showHistory.history.map((h, i) => (
                      <li key={i} className="py-2 flex justify-between"><span>{formatDate(h.date)}</span><span>{h.action}</span></li>
                    ))
                  ) : <li className="py-4 text-gray-400">Aucun historique</li>}
                </ul>
              </div>
            </div>
          )}
          {/* Ajout de la modale "Voir" détaillée */}
          {viewModal && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setViewModal(null)}>&times;</button>
                <h3 className="text-xl font-bold mb-4 text-[#2F5FDE]">Détail Cerfa</h3>
                <div className="mb-4">
                  <div className="font-semibold">{viewModal.nom} {viewModal.prenom} ({viewModal.type})</div>
                  <div className="text-xs text-gray-500">INE : {viewModal.ine} | SIRET : {viewModal.siret}</div>
                  <div className="text-xs text-gray-500">Date de naissance : {formatDate(viewModal.dateNaissance)}</div>
                  <div className="text-xs text-gray-500">Généré le : {formatDate(viewModal.date)}</div>
                </div>
                <div className="mb-4">
                  <div className="font-bold mb-2">Signature électronique</div>
                  <div className="flex flex-col gap-2">
                    {['apprenant', 'entreprise', 'cfa'].map(role => (
                      <div key={role} className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${viewModal.signataires[role] === 'signé' ? 'bg-[#12B76A] text-white' : viewModal.signataires[role] === 'refusé' ? 'bg-[#EF4444] text-white' : 'bg-gray-200 text-gray-600'}`}>{role}: {viewModal.signataires[role]}</span>
                        {viewModal.signDates && viewModal.signDates[role] && (
                          <span className="text-xs text-gray-500">{new Date(viewModal.signDates[role]).toLocaleString('fr-FR')}</span>
                        )}
                        {viewModal.signataires[role] === 'en attente' && (
                          <>
                            <a href={getMockSignLink(viewModal.id, role)} target="_blank" rel="noopener noreferrer" className="text-xs text-[#2F5FDE] underline">Lien de signature</a>
                            <button className="text-xs text-[#12B76A] underline" onClick={() => handleSign(viewModal.id, role)}>Signer (mock)</button>
                            <button className="text-xs text-[#EF4444] underline" onClick={() => handleRefuse(viewModal.id, role)}>Refuser</button>
                            <button className="text-xs text-[#2F5FDE] underline" onClick={() => handleRelanceSignataire(viewModal.id, role)}>Relancer</button>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={() => toast('Aperçu PDF mock')}>Aperçu PDF</button>
                  <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={() => toast('Téléchargement PDF mock')}>Télécharger PDF</button>
                </div>
              </div>
            </div>
          )}
        </div>
    </Layout>
  );
} 