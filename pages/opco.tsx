import React, { useState, useRef } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';

const DOSSIERS_MOCK = [
  { id: '1', nom: 'Contrat #1', statut: 'en attente', type: 'Contrat', date: '2024-07-01', montant: 12000, details: 'Contrat d’apprentissage pour Jean Dupont.', justificatif: null },
  { id: '2', nom: 'Contrat #2', statut: 'validé', type: 'Contrat', date: '2024-06-15', montant: 9500, details: 'Contrat pro pour Alice Martin.', justificatif: null },
  { id: '3', nom: 'Convention #1', statut: 'en attente', type: 'Convention', date: '2024-07-10', montant: 0, details: 'Convention de stage pour Paul Leroy.', justificatif: null },
  { id: '4', nom: 'Contrat #3', statut: 'refusé', type: 'Contrat', date: '2024-05-20', montant: 8000, details: 'Contrat d’apprentissage pour Emma Durand.', justificatif: null },
];

const STATUTS = ['tous', 'en attente', 'validé', 'refusé'];
const PAGE_SIZE = 2;

function generateId() {
  return Math.random().toString(36).slice(2, 10);
}

export default function OpcoPage() {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dossiers, setDossiers] = useState([]);
  const [filtre, setFiltre] = useState('tous');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState({ nom: '', type: 'Contrat', date: '', montant: '', details: '' });
  const [addLoading, setAddLoading] = useState(false);
  const [editForm, setEditForm] = useState(null);
  const [editLoading, setEditLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleConnexion() {
    setLoading(true);
    setTimeout(() => {
      if (Math.random() < 0.25) {
        setLoading(false);
        toast.error('Erreur de connexion à l’API OPCO. Veuillez réessayer.');
        return;
      }
      setConnected(true);
      setDossiers(DOSSIERS_MOCK);
      setLoading(false);
      toast.success('Connexion OPCO simulée !');
    }, 1200);
  }

  function handleDeconnexion() {
    setConnected(false);
    setDossiers([]);
    setFiltre('tous');
    setPage(1);
    setSelected(null);
    setSearch('');
    setSelectedIds([]);
    toast('Déconnexion OPCO.');
  }

  function handleExport(ids) {
    const toExport = ids ? dossiers.filter(d => ids.includes(d.id)) : dossiersFiltrés;
    const csv = [
      ['ID', 'Nom', 'Statut', 'Type', 'Date', 'Montant'],
      ...toExport.map(d => [d.id, d.nom, d.statut, d.type, d.date, d.montant])
    ].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dossiers-opco.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success('Export CSV généré !');
  }

  function handleAction(ids, action) {
    setDossiers(ds => ds.map(d =>
      ids.includes(d.id)
        ? { ...d, statut: action === 'valider' ? 'validé' : 'refusé' }
        : d
    ));
    toast.success(`Dossier${ids.length > 1 ? 's' : ''} ${action === 'valider' ? 'validé(s)' : 'refusé(s)'} !`);
    if (selected && ids.includes(selected.id)) {
      setSelected({ ...selected, statut: action === 'valider' ? 'validé' : 'refusé' });
    }
  }

  function handleSelect(dossier) {
    setSelected(dossier);
    setEditForm(null);
  }

  function closeDetails() {
    setSelected(null);
    setEditForm(null);
  }

  function handleAddDossier(e) {
    e.preventDefault();
    setAddLoading(true);
    setTimeout(() => {
      setDossiers(ds => [
        { ...addForm, id: generateId(), statut: 'en attente', montant: Number(addForm.montant), justificatif: null },
        ...ds
      ]);
      setShowAdd(false);
      setAddForm({ nom: '', type: 'Contrat', date: '', montant: '', details: '' });
      setAddLoading(false);
      toast.success('Dossier ajouté !');
    }, 800);
  }

  function handleEditDossier(e) {
    e.preventDefault();
    setEditLoading(true);
    setTimeout(() => {
      setDossiers(ds => ds.map(d =>
        d.id === selected.id ? { ...d, ...editForm, montant: Number(editForm.montant) } : d
      ));
      setSelected({ ...selected, ...editForm, montant: Number(editForm.montant) });
      setEditForm(null);
      setEditLoading(false);
      toast.success('Dossier modifié !');
    }, 800);
  }

  function handleDeleteDossier(id) {
    if (!window.confirm('Supprimer ce dossier ?')) return;
    setDossiers(ds => ds.filter(d => d.id !== id));
    setSelected(null);
    toast.success('Dossier supprimé !');
  }

  function handleUploadJustif(e) {
    const file = e.target.files[0];
    if (!file) return;
    setDossiers(ds => ds.map(d =>
      d.id === selected.id ? { ...d, justificatif: file.name } : d
    ));
    setSelected({ ...selected, justificatif: file.name });
    toast.success('Justificatif uploadé !');
  }

  function handleSelectAll(e) {
    if (e.target.checked) {
      setSelectedIds(dossiersPage.map(d => d.id));
    } else {
      setSelectedIds([]);
    }
  }

  function handleSelectOne(id) {
    setSelectedIds(ids => ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]);
  }

  // Recherche, filtre, pagination
  const dossiersFiltrés = dossiers.filter(d =>
    (filtre === 'tous' || d.statut === filtre) &&
    d.nom.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(dossiersFiltrés.length / PAGE_SIZE) || 1;
  const dossiersPage = dossiersFiltrés.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Layout title="OPCO">
      <div className="max-w-3xl mx-auto py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[#2F5FDE]">Gestion OPCO</h1>
          {/* Removed Clerk user info */}
        </div>
        {!connected ? (
          <button
            className="bg-[#2F5FDE] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition"
            onClick={handleConnexion}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center"><svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>Connexion...</span>
            ) : (
              'Connexion OPCO'
            )}
          </button>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
              <div className="flex gap-2 items-center">
                <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={() => setShowAdd(true)}>Ajouter un dossier</button>
                <input
                  type="text"
                  placeholder="Rechercher par nom..."
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
              <button
                className="text-sm text-[#2F5FDE] underline hover:text-[#1e3a8a]"
                onClick={handleDeconnexion}
              >
                Déconnexion OPCO
              </button>
            </div>
            <form className="mb-2 flex items-center gap-2">
              <input type="checkbox" checked={selectedIds.length === dossiersPage.length && dossiersPage.length > 0} onChange={handleSelectAll} />
              <span className="text-sm">Tout sélectionner</span>
              <button type="button" className="ml-2 bg-[#12B76A] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleAction(selectedIds, 'valider')}>Valider</button>
              <button type="button" className="bg-[#EF4444] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleAction(selectedIds, 'refuser')}>Refuser</button>
              <button type="button" className="bg-[#2F5FDE] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleExport(selectedIds)}>Export sélection</button>
            </form>
            <div className="bg-white rounded-xl shadow p-4 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-[#333]">Dossiers OPCO</h2>
              <ul className="divide-y divide-[#E9F0FF]">
                {dossiersPage.length === 0 && <li className="py-4 text-gray-400">Aucun dossier</li>}
                {dossiersPage.map((d) => (
                  <li key={d.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={selectedIds.includes(d.id)} onChange={() => handleSelectOne(d.id)} />
                      <button className="text-[#2F5FDE] font-semibold hover:underline" onClick={() => handleSelect(d)}>{d.nom}</button>
                      <span className={`ml-2 px-3 py-1 rounded-full text-xs font-bold ${d.statut === 'validé' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : d.statut === 'refusé' ? 'bg-[#EF4444] text-white' : 'bg-gray-200 text-gray-600'}`}>{d.statut}</span>
                    </div>
                    <div className="flex gap-2">
                      {d.statut === 'en attente' && (
                        <>
                          <button
                            className="bg-[#12B76A] text-white px-3 py-1 rounded hover:bg-green-700 text-xs font-semibold"
                            onClick={() => handleAction([d.id], 'valider')}
                          >Valider</button>
                          <button
                            className="bg-[#EF4444] text-white px-3 py-1 rounded hover:bg-red-700 text-xs font-semibold"
                            onClick={() => handleAction([d.id], 'refuser')}
                          >Refuser</button>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
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
            <button className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition" onClick={() => handleExport(undefined)} disabled={dossiersFiltrés.length === 0}>Export CSV</button>
            {showAdd && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <form className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative" onSubmit={handleAddDossier}>
                  <button type="button" className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowAdd(false)}>&times;</button>
                  <h3 className="text-xl font-bold mb-4 text-[#2F5FDE]">Ajouter un dossier</h3>
                  <div className="mb-2"><input required className="border rounded px-2 py-1 w-full" placeholder="Nom" value={addForm.nom} onChange={e => setAddForm(f => ({ ...f, nom: e.target.value }))} /></div>
                  <div className="mb-2">
                    <select className="border rounded px-2 py-1 w-full" value={addForm.type} onChange={e => setAddForm(f => ({ ...f, type: e.target.value }))}>
                      <option value="Contrat">Contrat</option>
                      <option value="Convention">Convention</option>
                    </select>
                  </div>
                  <div className="mb-2"><input required type="date" className="border rounded px-2 py-1 w-full" value={addForm.date} onChange={e => setAddForm(f => ({ ...f, date: e.target.value }))} /></div>
                  <div className="mb-2"><input required type="number" min="0" className="border rounded px-2 py-1 w-full" placeholder="Montant" value={addForm.montant} onChange={e => setAddForm(f => ({ ...f, montant: e.target.value }))} /></div>
                  <div className="mb-2"><textarea required className="border rounded px-2 py-1 w-full" placeholder="Détails" value={addForm.details} onChange={e => setAddForm(f => ({ ...f, details: e.target.value }))} /></div>
                  <button type="submit" className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition w-full mt-2" disabled={addLoading}>{addLoading ? 'Ajout...' : 'Ajouter'}</button>
                </form>
              </div>
            )}
            {selected && (
              <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={closeDetails}>&times;</button>
                  <h3 className="text-xl font-bold mb-2 text-[#2F5FDE]">Détails du dossier</h3>
                  {editForm ? (
                    <form onSubmit={handleEditDossier}>
                      <div className="mb-2"><input required className="border rounded px-2 py-1 w-full" value={editForm.nom} onChange={e => setEditForm(f => ({ ...f, nom: e.target.value }))} /></div>
                      <div className="mb-2">
                        <select className="border rounded px-2 py-1 w-full" value={editForm.type} onChange={e => setEditForm(f => ({ ...f, type: e.target.value }))}>
                          <option value="Contrat">Contrat</option>
                          <option value="Convention">Convention</option>
                        </select>
                      </div>
                      <div className="mb-2"><input required type="date" className="border rounded px-2 py-1 w-full" value={editForm.date} onChange={e => setEditForm(f => ({ ...f, date: e.target.value }))} /></div>
                      <div className="mb-2"><input required type="number" min="0" className="border rounded px-2 py-1 w-full" value={editForm.montant} onChange={e => setEditForm(f => ({ ...f, montant: e.target.value }))} /></div>
                      <div className="mb-2"><textarea required className="border rounded px-2 py-1 w-full" value={editForm.details} onChange={e => setEditForm(f => ({ ...f, details: e.target.value }))} /></div>
                      <button type="submit" className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition w-full mt-2" disabled={editLoading}>{editLoading ? 'Enregistrement...' : 'Enregistrer'}</button>
                      <button type="button" className="w-full mt-2 text-sm text-gray-500 underline" onClick={() => setEditForm(null)}>Annuler</button>
                    </form>
                  ) : (
                    <>
                      <div className="mb-2"><span className="font-semibold">Nom :</span> {selected.nom}</div>
                      <div className="mb-2"><span className="font-semibold">Type :</span> {selected.type}</div>
                      <div className="mb-2"><span className="font-semibold">Date :</span> {selected.date}</div>
                      <div className="mb-2"><span className="font-semibold">Montant :</span> {selected.montant ? selected.montant + ' €' : 'N/A'}</div>
                      <div className="mb-2"><span className="font-semibold">Statut :</span> <span className={`px-2 py-1 rounded text-xs font-bold ${selected.statut === 'validé' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : selected.statut === 'refusé' ? 'bg-[#EF4444] text-white' : 'bg-gray-200 text-gray-600'}`}>{selected.statut}</span></div>
                      <div className="mb-2"><span className="font-semibold">Détails :</span> {selected.details}</div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-semibold">Justificatif :</span>
                        {selected.justificatif ? <span className="text-[#2F5FDE]">{selected.justificatif}</span> : <span className="text-gray-400">Aucun</span>}
                        <input type="file" ref={fileInputRef} className="hidden" onChange={handleUploadJustif} />
                        <button className="text-xs text-[#2F5FDE] underline" onClick={() => { if (fileInputRef.current) fileInputRef.current.click(); }}>Uploader</button>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button className="bg-[#2F5FDE] text-white px-4 py-1 rounded font-semibold" onClick={() => setEditForm({ ...selected })}>Éditer</button>
                        <button className="bg-[#EF4444] text-white px-4 py-1 rounded font-semibold" onClick={() => handleDeleteDossier(selected.id)}>Supprimer</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
} 