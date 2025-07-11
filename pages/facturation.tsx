import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';

const FACTURES_MOCK = [
  { id: '1', numero: 'FAC-2024-001', client: 'Entreprise A', contrat: 'Contrat #1', montant: 12000, statut: 'en attente', date: '2024-07-01', echeance: '2024-07-31', relances: 0, notes: '', justificatif: null, pieces: [], relanceHistory: [] },
  { id: '2', numero: 'FAC-2024-002', client: 'Entreprise B', contrat: 'Contrat #2', montant: 9500, statut: 'payée', date: '2024-06-15', echeance: '2024-07-15', relances: 1, notes: 'Payée rapidement', justificatif: 'recu-b.pdf', pieces: ['contrat-b.pdf'], relanceHistory: [{ date: '2024-07-10', message: 'Relance envoyée' }] },
  { id: '3', numero: 'FAC-2024-003', client: 'Entreprise C', contrat: 'Contrat #3', montant: 8000, statut: 'en retard', date: '2024-05-20', echeance: '2024-06-20', relances: 2, notes: '', justificatif: null, pieces: [], relanceHistory: [{ date: '2024-06-25', message: '1ère relance' }, { date: '2024-07-01', message: '2ème relance' }] },
];

const STATUTS = ['tous', 'en attente', 'payée', 'en retard'];
const PAGE_SIZE = 2;

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR');
}

function getStats(factures) {
  const total = factures.reduce((s, f) => s + f.montant, 0);
  const payee = factures.filter(f => f.statut === 'payée').reduce((s, f) => s + f.montant, 0);
  const attente = factures.filter(f => f.statut === 'en attente').reduce((s, f) => s + f.montant, 0);
  const retard = factures.filter(f => f.statut === 'en retard').reduce((s, f) => s + f.montant, 0);
  return { total, payee, attente, retard };
}

export default function FacturationPage() {
  const [factures, setFactures] = useState(FACTURES_MOCK);
  const [filtre, setFiltre] = useState('tous');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState({ client: '', contrat: '', montant: '', date: '', echeance: '' });
  const [addLoading, setAddLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const [editForm, setEditForm] = useState(null);
  const [editLoading, setEditLoading] = useState(false);
  const [showRelances, setShowRelances] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pieceInputRef = useRef<HTMLInputElement>(null);

  function handleSelectAll(e) {
    if (e.target.checked) {
      setSelectedIds(facturesPage.map(f => f.id));
    } else {
      setSelectedIds([]);
    }
  }
  function handleSelectOne(id) {
    setSelectedIds(ids => ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]);
  }

  function handleExport(ids) {
    const toExport = ids ? factures.filter(f => ids.includes(f.id)) : facturesFiltrés;
    const csv = [
      ['Numéro', 'Client', 'Contrat', 'Montant', 'Statut', 'Date', 'Échéance'],
      ...toExport.map(f => [f.numero, f.client, f.contrat, f.montant, f.statut, f.date, f.echeance])
    ].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'factures.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success('Export CSV généré !');
  }

  function handleExportExcel() {
    toast.success('Export Excel généré (mock) !');
  }

  function handleAction(ids, action) {
    setFactures(fs => fs.map(f =>
      ids.includes(f.id)
        ? {
            ...f,
            statut: action === 'payée' ? 'payée' : f.statut,
            relances: action === 'relancer' ? f.relances + 1 : f.relances,
            relanceHistory: action === 'relancer' ? [...(f.relanceHistory || []), { date: new Date().toISOString().slice(0, 10), message: 'Relance envoyée' }] : f.relanceHistory
          }
        : f
    ));
    toast.success(`Facture${ids.length > 1 ? 's' : ''} ${action === 'payée' ? 'marquée(s) payée(s)' : 'relancée(s)'} !`);
    if (selected && ids.includes(selected.id) && action === 'payée') {
      setSelected({ ...selected, statut: 'payée' });
    }
  }

  function handleAddFacture(e) {
    e.preventDefault();
    setAddLoading(true);
    setTimeout(() => {
      setFactures(fs => [
        { ...addForm, id: generateId(), numero: 'FAC-2024-' + (fs.length + 1).toString().padStart(3, '0'), statut: 'en attente', montant: Number(addForm.montant), relances: 0, notes: '', justificatif: null, pieces: [], relanceHistory: [] },
        ...fs
      ]);
      setShowAdd(false);
      setAddForm({ client: '', contrat: '', montant: '', date: '', echeance: '' });
      setAddLoading(false);
      toast.success('Facture ajoutée !');
    }, 800);
  }

  function handleEditFacture(e) {
    e.preventDefault();
    setEditLoading(true);
    setTimeout(() => {
      setFactures(fs => fs.map(f =>
        f.id === selected.id ? { ...f, ...editForm, montant: Number(editForm.montant) } : f
      ));
      setSelected({ ...selected, ...editForm, montant: Number(editForm.montant) });
      setEditForm(null);
      setEditLoading(false);
      toast.success('Facture modifiée !');
    }, 800);
  }

  function handleDeleteFacture(id) {
    if (!window.confirm('Supprimer cette facture ?')) return;
    setFactures(fs => fs.filter(f => f.id !== id));
    setSelected(null);
    toast.success('Facture supprimée !');
  }

  function handleUploadJustif(e) {
    const file = e.target.files[0];
    if (!file) return;
    setFactures(fs => fs.map(f =>
      f.id === selected.id ? { ...f, justificatif: file.name } : f
    ));
    setSelected({ ...selected, justificatif: file.name });
    toast.success('Justificatif uploadé !');
  }

  function handleUploadPiece(e) {
    const file = e.target.files[0];
    if (!file) return;
    setFactures(fs => fs.map(f =>
      f.id === selected.id ? { ...f, pieces: [...(f.pieces || []), file.name] } : f
    ));
    setSelected({ ...selected, pieces: [...(selected.pieces || []), file.name] });
    toast.success('Pièce jointe uploadée !');
  }

  function handleEditNotes(notes) {
    setFactures(fs => fs.map(f =>
      f.id === selected.id ? { ...f, notes } : f
    ));
    setSelected({ ...selected, notes });
    toast.success('Notes enregistrées !');
  }

  function handleShowPDF(facture) {
    toast('Aperçu PDF mock (fonctionnalité à brancher sur un vrai backend)');
  }

  function handleDownloadPDF(facture) {
    toast('Téléchargement PDF mock (fonctionnalité à brancher sur un vrai backend)');
  }

  // Recherche, filtre, pagination
  const facturesFiltrés = factures.filter(f =>
    (filtre === 'tous' || f.statut === filtre) &&
    (f.client.toLowerCase().includes(search.toLowerCase()) || f.numero.toLowerCase().includes(search.toLowerCase()) || f.contrat.toLowerCase().includes(search.toLowerCase()))
  );
  const totalPages = Math.ceil(facturesFiltrés.length / PAGE_SIZE) || 1;
  const facturesPage = facturesFiltrés.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const stats = getStats(factures);

  return (
    <Layout title="Facturation">
      <div className="max-w-4xl mx-auto py-12">
          {/* Dashboard Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Total facturé</span>
              <span className="text-2xl font-bold text-[#2F5FDE]">{stats.total} €</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Payé</span>
              <span className="text-2xl font-bold text-[#12B76A]">{stats.payee} €</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">En attente</span>
              <span className="text-2xl font-bold text-[#2F5FDE]">{stats.attente} €</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">En retard</span>
              <span className="text-2xl font-bold text-[#EF4444]">{stats.retard} €</span>
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
                <div className="w-6 bg-[#12B76A]" style={{ height: `${stats.payee / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">Payée</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-[#EF4444]" style={{ height: `${stats.retard / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">Retard</span>
              </div>
            </div>
          </div>
          {/* Filtres et actions */}
          <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
            <div className="flex gap-2 items-center">
              <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={() => setShowAdd(true)}>Nouvelle facture</button>
              <input
                type="text"
                placeholder="Recherche client, contrat, numéro..."
                className="border rounded px-2 py-1 ml-2"
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
              />
              <label htmlFor="filtre" className="ml-2 text-gray-700">Filtrer :</label>
              <select
                id="filtre"
                className="border rounded px-2 py-1"
                value={filtre}
                onChange={e => { setFiltre(e.target.value); setPage(1); }}
              >
                {STATUTS.map(s => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
            </div>
            <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={handleExportExcel}>Export Excel</button>
          </div>
          <form className="mb-2 flex items-center gap-2">
            <input type="checkbox" checked={selectedIds.length === facturesPage.length && facturesPage.length > 0} onChange={handleSelectAll} />
            <span className="text-sm">Tout sélectionner</span>
            <button type="button" className="ml-2 bg-[#12B76A] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleAction(selectedIds, 'payée')}>Marquer payée</button>
            <button type="button" className="bg-[#2F5FDE] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleAction(selectedIds, 'relancer')}>Relancer</button>
            <button type="button" className="bg-[#2F5FDE] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleExport(selectedIds)}>Export sélection</button>
          </form>
          <div className="bg-white rounded-xl shadow p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-[#333]">Liste des factures</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#E9F0FF]">
                  <th className="p-2"></th>
                  <th className="p-2 text-left">Numéro</th>
                  <th className="p-2 text-left">Client</th>
                  <th className="p-2 text-left">Contrat</th>
                  <th className="p-2 text-right">Montant</th>
                  <th className="p-2 text-center">Statut</th>
                  <th className="p-2 text-center">Date</th>
                  <th className="p-2 text-center">Échéance</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {facturesPage.length === 0 && (
                  <tr><td colSpan={9} className="py-4 text-gray-400 text-center">Aucune facture</td></tr>
                )}
                {facturesPage.map(f => (
                  <tr key={f.id} className="border-b last:border-b-0">
                    <td className="p-2"><input type="checkbox" checked={selectedIds.includes(f.id)} onChange={() => handleSelectOne(f.id)} /></td>
                    <td className="p-2 text-[#2F5FDE] font-semibold cursor-pointer hover:underline" onClick={() => setSelected(f)}>{f.numero}</td>
                    <td className="p-2">{f.client}</td>
                    <td className="p-2">{f.contrat}</td>
                    <td className="p-2 text-right">{f.montant} €</td>
                    <td className="p-2 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${f.statut === 'payée' ? 'bg-[#12B76A] text-white' : f.statut === 'en retard' ? 'bg-[#EF4444] text-white' : 'bg-gray-200 text-gray-600'}`}>{f.statut}</span>
                    </td>
                    <td className="p-2 text-center">{formatDate(f.date)}</td>
                    <td className="p-2 text-center">{formatDate(f.echeance)}</td>
                    <td className="p-2 text-center flex gap-1 justify-center">
                      <button className="text-xs text-[#2F5FDE] underline" onClick={() => setSelected(f)}>Voir</button>
                      <button className="text-xs text-[#12B76A] underline" onClick={() => handleAction([f.id], 'payée')}>Payée</button>
                      <button className="text-xs text-[#2F5FDE] underline" onClick={() => handleAction([f.id], 'relancer')}>Relancer</button>
                      <button className="text-xs text-[#EF4444] underline" onClick={() => handleDeleteFacture(f.id)}>Supprimer</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {totalPages > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                <button
                  className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                >Précédent</button>
                <span className="px-2 text-sm">Page {page} / {totalPages}</span>
                <button
                  className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >Suivant</button>
              </div>
            )}
          </div>
          <button className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition" onClick={() => handleExport(undefined)} disabled={facturesFiltrés.length === 0}>Export CSV</button>
          {showAdd && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <form className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative" onSubmit={handleAddFacture}>
                <button type="button" className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowAdd(false)}>&times;</button>
                <h3 className="text-xl font-bold mb-4 text-[#2F5FDE]">Nouvelle facture</h3>
                <div className="mb-2"><input required className="border rounded px-2 py-1 w-full" placeholder="Client" value={addForm.client} onChange={e => setAddForm(f => ({ ...f, client: e.target.value }))} /></div>
                <div className="mb-2"><input required className="border rounded px-2 py-1 w-full" placeholder="Contrat" value={addForm.contrat} onChange={e => setAddForm(f => ({ ...f, contrat: e.target.value }))} /></div>
                <div className="mb-2"><input required type="number" min="0" className="border rounded px-2 py-1 w-full" placeholder="Montant" value={addForm.montant} onChange={e => setAddForm(f => ({ ...f, montant: e.target.value }))} /></div>
                <div className="mb-2"><input required type="date" className="border rounded px-2 py-1 w-full" value={addForm.date} onChange={e => setAddForm(f => ({ ...f, date: e.target.value }))} /></div>
                <div className="mb-2"><input required type="date" className="border rounded px-2 py-1 w-full" value={addForm.echeance} onChange={e => setAddForm(f => ({ ...f, echeance: e.target.value }))} /></div>
                <button type="submit" className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition w-full mt-2" disabled={addLoading}>{addLoading ? 'Ajout...' : 'Ajouter'}</button>
              </form>
            </div>
          )}
          {selected && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setSelected(null)}>&times;</button>
                <h3 className="text-xl font-bold mb-2 text-[#2F5FDE]">Détail facture</h3>
                {editForm ? (
                  <form onSubmit={handleEditFacture}>
                    <div className="mb-2"><input required className="border rounded px-2 py-1 w-full" value={editForm.client} onChange={e => setEditForm(f => ({ ...f, client: e.target.value }))} /></div>
                    <div className="mb-2"><input required className="border rounded px-2 py-1 w-full" value={editForm.contrat} onChange={e => setEditForm(f => ({ ...f, contrat: e.target.value }))} /></div>
                    <div className="mb-2"><input required type="number" min="0" className="border rounded px-2 py-1 w-full" value={editForm.montant} onChange={e => setEditForm(f => ({ ...f, montant: e.target.value }))} /></div>
                    <div className="mb-2"><input required type="date" className="border rounded px-2 py-1 w-full" value={editForm.date} onChange={e => setEditForm(f => ({ ...f, date: e.target.value }))} /></div>
                    <div className="mb-2"><input required type="date" className="border rounded px-2 py-1 w-full" value={editForm.echeance} onChange={e => setEditForm(f => ({ ...f, echeance: e.target.value }))} /></div>
                    <button type="submit" className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition w-full mt-2" disabled={editLoading}>{editLoading ? 'Enregistrement...' : 'Enregistrer'}</button>
                    <button type="button" className="w-full mt-2 text-sm text-gray-500 underline" onClick={() => setEditForm(null)}>Annuler</button>
                  </form>
                ) : (
                  <>
                    <div className="mb-2"><span className="font-semibold">Numéro :</span> {selected.numero}</div>
                    <div className="mb-2"><span className="font-semibold">Client :</span> {selected.client}</div>
                    <div className="mb-2"><span className="font-semibold">Contrat :</span> {selected.contrat}</div>
                    <div className="mb-2"><span className="font-semibold">Montant :</span> {selected.montant} €</div>
                    <div className="mb-2"><span className="font-semibold">Statut :</span> <span className={`px-2 py-1 rounded text-xs font-bold ${selected.statut === 'payée' ? 'bg-[#12B76A] text-white' : selected.statut === 'en retard' ? 'bg-[#EF4444] text-white' : 'bg-gray-200 text-gray-600'}`}>{selected.statut}</span></div>
                    <div className="mb-2"><span className="font-semibold">Date :</span> {formatDate(selected.date)}</div>
                    <div className="mb-2"><span className="font-semibold">Échéance :</span> {formatDate(selected.echeance)}</div>
                    <div className="mb-2"><span className="font-semibold">Relances :</span> {selected.relances}</div>
                    <div className="mb-2 flex gap-2">
                      <button className="bg-[#2F5FDE] text-white px-3 py-1 rounded text-xs font-semibold" onClick={() => handleShowPDF(selected)}>Voir PDF</button>
                      <button className="bg-[#2F5FDE] text-white px-3 py-1 rounded text-xs font-semibold" onClick={() => handleDownloadPDF(selected)}>Télécharger PDF</button>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="font-semibold">Justificatif :</span>
                      {selected.justificatif ? <span className="text-[#2F5FDE]">{selected.justificatif}</span> : <span className="text-gray-400">Aucun</span>}
                      <input type="file" ref={fileInputRef} className="hidden" onChange={handleUploadJustif} />
                      <button className="text-xs text-[#2F5FDE] underline" onClick={() => { if (fileInputRef.current) fileInputRef.current.click(); }}>Uploader</button>
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="font-semibold">Pièces jointes :</span>
                      {selected.pieces && selected.pieces.length > 0 ? (
                        <ul className="flex flex-col gap-1">
                          {selected.pieces.map((p, i) => <li key={i} className="text-[#2F5FDE] text-xs">{p}</li>)}
                        </ul>
                      ) : <span className="text-gray-400">Aucune</span>}
                      <input type="file" ref={pieceInputRef} className="hidden" onChange={handleUploadPiece} />
                      <button className="text-xs text-[#2F5FDE] underline" onClick={() => { if (pieceInputRef.current) pieceInputRef.current.click(); }}>Uploader</button>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Notes :</span>
                      <textarea className="border rounded px-2 py-1 w-full mt-1" value={selected.notes} onChange={e => handleEditNotes(e.target.value)} />
                    </div>
                    <div className="mb-2">
                      <button className="text-xs text-[#2F5FDE] underline" onClick={() => setShowRelances(true)}>Voir historique des relances</button>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button className="bg-[#2F5FDE] text-white px-4 py-1 rounded font-semibold" onClick={() => setEditForm({ ...selected })}>Éditer</button>
                      <button className="bg-[#12B76A] text-white px-4 py-1 rounded font-semibold" onClick={() => handleAction([selected.id], 'payée')}>Payée</button>
                      <button className="bg-[#2F5FDE] text-white px-4 py-1 rounded font-semibold" onClick={() => handleAction([selected.id], 'relancer')}>Relancer</button>
                      <button className="bg-[#EF4444] text-white px-4 py-1 rounded font-semibold" onClick={() => handleDeleteFacture(selected.id)}>Supprimer</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          {showRelances && selected && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowRelances(false)}>&times;</button>
                <h3 className="text-xl font-bold mb-2 text-[#2F5FDE]">Historique des relances</h3>
                <ul className="divide-y divide-[#E9F0FF]">
                  {selected.relanceHistory && selected.relanceHistory.length > 0 ? (
                    selected.relanceHistory.map((r, i) => (
                      <li key={i} className="py-2 flex justify-between"><span>{formatDate(r.date)}</span><span>{r.message}</span></li>
                    ))
                  ) : <li className="py-4 text-gray-400">Aucune relance</li>}
                </ul>
              </div>
            </div>
          )}
        </div>
    </Layout>
  );
} 