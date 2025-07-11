import React, { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-hot-toast';

// Ajouter un type explicite pour l'objet history avec planifDate optionnel

type RelanceHistory = {
  date: string;
  message: string;
  canal: string;
  statut: string;
  planifDate?: string;
};

type Relance = {
  id: string;
  type: string;
  destinataire: string;
  objet: string;
  echeance: string;
  relances: number;
  statut: string;
  planifiee: boolean;
  planifDate?: string;
  history: RelanceHistory[];
};

// Adapter le mock pour typer relances correctement
const RELANCES_MOCK: Relance[] = [
  { id: '1', type: 'facture', destinataire: 'Entreprise A', objet: 'Facture FAC-2024-001', echeance: '2024-07-31', relances: 1, statut: 'à relancer', planifiee: false, history: [{ date: '2024-07-10', message: '1ère relance', canal: 'email', statut: 'envoyée' }] },
  { id: '2', type: 'contrat', destinataire: 'Entreprise B', objet: 'Contrat #2', echeance: '2024-07-15', relances: 0, statut: 'à relancer', planifiee: false, history: [] },
  { id: '3', type: 'convention', destinataire: 'Entreprise C', objet: 'Convention #1', echeance: '2024-07-20', relances: 2, statut: 'relancé', planifiee: false, history: [{ date: '2024-07-01', message: '1ère relance', canal: 'sms', statut: 'envoyée' }, { date: '2024-07-10', message: '2ème relance', canal: 'email', statut: 'envoyée' }] },
  { id: '4', type: 'facture', destinataire: 'Entreprise D', objet: 'Facture FAC-2024-004', echeance: '2024-08-10', relances: 0, statut: 'à relancer', planifiee: true, planifDate: '2024-08-01', history: [{ date: '2024-07-20', message: 'Relance planifiée', canal: 'email', statut: 'planifiée', planifDate: '2024-08-01' }] },
];

const TYPES = ['tous', 'facture', 'contrat', 'convention'];
const STATUTS = ['tous', 'à relancer', 'relancé', 'traité', 'planifiée'];
const PAGE_SIZE = 2;

const MODELES_MOCK = [
  { id: 1, nom: 'Relance standard', message: 'Bonjour, merci de traiter ce dossier au plus vite.' },
  { id: 2, nom: 'Relance polie', message: 'Bonjour, nous vous remercions de bien vouloir régulariser la situation.' },
];

function formatDate(date) {
  return new Date(date).toLocaleDateString('fr-FR');
}

function getStats(relances) {
  const total = relances.length;
  const aRelancer = relances.filter(r => r.statut === 'à relancer').length;
  const relancees = relances.filter(r => r.statut === 'relancé').length;
  const traitees = relances.filter(r => r.statut === 'traité').length;
  const planifiees = relances.filter(r => r.planifiee).length;
  return { total, aRelancer, relancees, traitees, planifiees };
}

export default function RelancesPage() {
  const [relances, setRelances] = useState(RELANCES_MOCK);
  const [filtreType, setFiltreType] = useState('tous');
  const [filtreStatut, setFiltreStatut] = useState('tous');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const [showRelance, setShowRelance] = useState(false);
  const [relanceMsg, setRelanceMsg] = useState(MODELES_MOCK[0].message);
  const [relanceCanal, setRelanceCanal] = useState('email');
  const [relanceTarget, setRelanceTarget] = useState(null);
  const [relancePlanif, setRelancePlanif] = useState(false);
  const [relancePlanifDate, setRelancePlanifDate] = useState('');
  const [showHistory, setShowHistory] = useState(null);
  const [showGlobalHistory, setShowGlobalHistory] = useState(false);
  const [autoLoading, setAutoLoading] = useState(false);
  const [planifLoading, setPlanifLoading] = useState(false);
  const [modeles, setModeles] = useState(MODELES_MOCK);
  const [showModeles, setShowModeles] = useState(false);
  const [editModele, setEditModele] = useState(null);
  const [modeleNom, setModeleNom] = useState('');
  const [modeleMsg, setModeleMsg] = useState('');

  function handleSelectAll(e) {
    if (e.target.checked) {
      setSelectedIds(relancesPage.map(r => r.id));
    } else {
      setSelectedIds([]);
    }
  }
  function handleSelectOne(id) {
    setSelectedIds(ids => ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id]);
  }

  function handleRelancer(ids) {
    setRelanceTarget(ids);
    setShowRelance(true);
    setRelanceMsg(modeles[0]?.message || '');
    setRelanceCanal('email');
    setRelancePlanif(false);
    setRelancePlanifDate('');
  }

  function confirmRelance() {
    if (relancePlanif && !relancePlanifDate) {
      toast.error('Veuillez choisir une date de planification');
      return;
    }
    setRelances(rs => rs.map(r => {
      if ((Array.isArray(relanceTarget) ? relanceTarget : [relanceTarget]).includes(r.id)) {
        if (relancePlanif) {
          return {
            ...r,
            planifiee: true,
            planifDate: relancePlanifDate,
            history: [...(r.history || []), { date: new Date().toISOString().slice(0, 10), message: relanceMsg, canal: relanceCanal, statut: 'planifiée', planifDate: relancePlanifDate }]
          };
        } else {
          return {
            ...r,
            statut: 'relancé',
            relances: r.relances + 1,
            planifiee: false,
            planifDate: undefined,
            history: [...(r.history || []), { date: new Date().toISOString().slice(0, 10), message: relanceMsg, canal: relanceCanal, statut: 'envoyée' }]
          };
        }
      }
      return r;
    }));
    setShowRelance(false);
    setSelectedIds([]);
    toast.success(relancePlanif ? 'Relance planifiée (mock) !' : 'Relance envoyée (mock) !');
  }

  function handleTraite(ids) {
    setRelances(rs => rs.map(r =>
      ids.includes(r.id) ? { ...r, statut: 'traité', planifiee: false, planifDate: undefined } : r
    ));
    setSelectedIds([]);
    toast.success('Marqué comme traité !');
  }

  function handleExport(ids) {
    const toExport = ids ? relances.filter(r => ids.includes(r.id)) : relancesFiltrés;
    const csv = [
      ['Type', 'Destinataire', 'Objet', 'Échéance', 'Relances', 'Statut', 'Planifiée', 'Date planif'],
      ...toExport.map(r => [r.type, r.destinataire, r.objet, r.echeance, r.relances, r.statut, r.planifiee ? 'oui' : 'non', r.planifDate || ''])
    ].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'relances.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success('Export CSV généré !');
  }

  function handleAutoRelance() {
    setAutoLoading(true);
    setTimeout(() => {
      setRelances(rs => rs.map(r =>
        r.statut === 'à relancer'
          ? {
              ...r,
              statut: 'relancé',
              relances: r.relances + 1,
              planifiee: false,
              planifDate: undefined,
              history: [...(r.history || []), { date: new Date().toISOString().slice(0, 10), message: 'Relance automatique', canal: 'email', statut: 'envoyée' }]
            }
          : r
      ));
      setAutoLoading(false);
      toast.success('Relance automatique envoyée (mock) !');
    }, 1200);
  }

  function handlePlanifRelance() {
    setPlanifLoading(true);
    setTimeout(() => {
      setRelances(rs => rs.map(r =>
        r.planifiee && r.planifDate && new Date(r.planifDate) <= new Date()
          ? {
              ...r,
              statut: 'relancé',
              relances: r.relances + 1,
              planifiee: false,
              planifDate: undefined,
              history: [...(r.history || []), { date: new Date().toISOString().slice(0, 10), message: 'Relance planifiée envoyée', canal: 'email', statut: 'envoyée' }]
            }
          : r
      ));
      setPlanifLoading(false);
      toast.success('Toutes les relances planifiées ont été envoyées (mock) !');
    }, 1200);
  }

  // Modèles de messages
  function handleAddModele() {
    if (!modeleNom || !modeleMsg) {
      toast.error('Nom et message requis');
      return;
    }
    setModeles(ms => [...ms, { id: Date.now(), nom: modeleNom, message: modeleMsg }]);
    setModeleNom('');
    setModeleMsg('');
    toast.success('Modèle ajouté !');
  }
  function handleEditModeleSave() {
    setModeles(ms => ms.map(m => m.id === editModele.id ? { ...m, nom: modeleNom, message: modeleMsg } : m));
    setEditModele(null);
    setModeleNom('');
    setModeleMsg('');
    toast.success('Modèle modifié !');
  }
  function handleDeleteModele(id) {
    setModeles(ms => ms.filter(m => m.id !== id));
    toast.success('Modèle supprimé !');
  }

  // Recherche, filtres, pagination
  const relancesFiltrés = relances.filter(r =>
    (filtreType === 'tous' || r.type === filtreType) &&
    (filtreStatut === 'tous' || r.statut === filtreStatut || (filtreStatut === 'planifiée' && r.planifiee)) &&
    (r.destinataire.toLowerCase().includes(search.toLowerCase()) || r.objet.toLowerCase().includes(search.toLowerCase()))
  );
  const totalPages = Math.ceil(relancesFiltrés.length / PAGE_SIZE) || 1;
  const relancesPage = relancesFiltrés.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const stats = getStats(relances);
  const allHistory = relances.flatMap(r => (r.history || []).map(h => ({ ...h, destinataire: r.destinataire, objet: r.objet, type: r.type })));

  return (
    <Layout title="Relances">
      <div className="max-w-3xl mx-auto py-12">
          {/* Dashboard Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Total</span>
              <span className="text-2xl font-bold text-[#2F5FDE]">{stats.total}</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">À relancer</span>
              <span className="text-2xl font-bold text-[#2F5FDE]">{stats.aRelancer}</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Relancées</span>
              <span className="text-2xl font-bold text-[#12B76A]">{stats.relancees}</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Traitées</span>
              <span className="text-2xl font-bold text-[#EF4444]">{stats.traitees}</span>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <span className="text-xs text-gray-500">Planifiées</span>
              <span className="text-2xl font-bold text-[#2F5FDE]">{stats.planifiees}</span>
            </div>
          </div>
          {/* Graphique mock */}
          <div className="bg-white rounded-xl shadow p-4 mb-8 flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Répartition des statuts (mock)</span>
            <div className="w-full h-24 flex items-end gap-4">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-[#2F5FDE]" style={{ height: `${stats.aRelancer / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">À relancer</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-[#12B76A]" style={{ height: `${stats.relancees / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">Relancées</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-[#EF4444]" style={{ height: `${stats.traitees / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">Traitées</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-6 bg-[#2F5FDE]" style={{ height: `${stats.planifiees / (stats.total || 1) * 80}px` }}></div>
                <span className="text-xs mt-1">Planifiées</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Recherche destinataire, objet..."
                className="border rounded px-2 py-1"
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
              />
              <label htmlFor="filtreType" className="ml-2 text-gray-700">Type :</label>
              <select
                id="filtreType"
                className="border rounded px-2 py-1"
                value={filtreType}
                onChange={e => { setFiltreType(e.target.value); setPage(1); }}
              >
                {TYPES.map(t => (
                  <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                ))}
              </select>
              <label htmlFor="filtreStatut" className="ml-2 text-gray-700">Statut :</label>
              <select
                id="filtreStatut"
                className="border rounded px-2 py-1"
                value={filtreStatut}
                onChange={e => { setFiltreStatut(e.target.value); setPage(1); }}
              >
                {STATUTS.map(s => (
                  <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 items-center">
              <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={() => setShowGlobalHistory(true)}>Historique global</button>
              <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a]" onClick={() => setShowModeles(true)}>Modèles</button>
              <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a] flex items-center gap-2" onClick={handleAutoRelance} disabled={autoLoading}>
                {autoLoading && <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>}
                Lancer relance automatique
              </button>
              <button className="bg-[#2F5FDE] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#1e3a8a] flex items-center gap-2" onClick={handlePlanifRelance} disabled={planifLoading}>
                {planifLoading && <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>}
                Lancer toutes les relances planifiées
              </button>
            </div>
          </div>
          <form className="mb-2 flex items-center gap-2">
            <input type="checkbox" checked={selectedIds.length === relancesPage.length && relancesPage.length > 0} onChange={handleSelectAll} />
            <span className="text-sm">Tout sélectionner</span>
            <button type="button" className="ml-2 bg-[#2F5FDE] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleRelancer(selectedIds)}>Relancer</button>
            <button type="button" className="bg-[#12B76A] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleTraite(selectedIds)}>Marquer traité</button>
            <button type="button" className="bg-[#2F5FDE] text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-50" disabled={selectedIds.length === 0} onClick={() => handleExport(selectedIds)}>Export sélection</button>
          </form>
          <div className="bg-white rounded-xl shadow p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-[#333]">Éléments à relancer</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#E9F0FF]">
                  <th className="p-2"></th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Destinataire</th>
                  <th className="p-2 text-left">Objet</th>
                  <th className="p-2 text-center">Échéance</th>
                  <th className="p-2 text-center">Relances</th>
                  <th className="p-2 text-center">Statut</th>
                  <th className="p-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {relancesPage.length === 0 && (
                  <tr><td colSpan={8} className="py-4 text-gray-400 text-center">Aucun élément</td></tr>
                )}
                {relancesPage.map(r => (
                  <tr key={r.id} className="border-b last:border-b-0">
                    <td className="p-2"><input type="checkbox" checked={selectedIds.includes(r.id)} onChange={() => handleSelectOne(r.id)} /></td>
                    <td className="p-2 capitalize">{r.type}</td>
                    <td className="p-2">{r.destinataire}</td>
                    <td className="p-2">{r.objet}</td>
                    <td className="p-2 text-center">{formatDate(r.echeance)}</td>
                    <td className="p-2 text-center">{r.relances}</td>
                    <td className="p-2 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${r.planifiee ? 'bg-[#E9F0FF] text-[#2F5FDE]' : r.statut === 'relancé' ? 'bg-[#2F5FDE] text-white' : r.statut === 'traité' ? 'bg-[#12B76A] text-white' : 'bg-gray-200 text-gray-600'}`}>{r.planifiee ? 'planifiée' : r.statut}</span>
                      {r.planifiee && r.planifDate && <span className="ml-2 text-xs text-gray-500">({formatDate(r.planifDate)})</span>}
                    </td>
                    <td className="p-2 text-center flex gap-1 justify-center">
                      <button className="text-xs text-[#2F5FDE] underline" onClick={() => handleRelancer([r.id])}>Relancer</button>
                      <button className="text-xs text-[#12B76A] underline" onClick={() => handleTraite([r.id])}>Traité</button>
                      <button className="text-xs text-[#2F5FDE] underline" onClick={() => setShowHistory(r)}>Historique</button>
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
          <button className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition" onClick={() => handleExport(undefined)} disabled={relancesFiltrés.length === 0}>Export CSV</button>
          {/* Modal relance */}
          {showRelance && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowRelance(false)}>&times;</button>
                <h3 className="text-xl font-bold mb-4 text-[#2F5FDE]">Confirmer la relance</h3>
                <div className="mb-2 flex items-center gap-2">
                  <label className="font-semibold">Modèle :</label>
                  <select className="border rounded px-2 py-1" value={relanceMsg} onChange={e => setRelanceMsg(e.target.value)}>
                    {modeles.map(m => <option key={m.id} value={m.message}>{m.nom}</option>)}
                  </select>
                  <button className="text-xs text-[#2F5FDE] underline" onClick={() => setShowModeles(true)}>Gérer</button>
                </div>
                <div className="mb-2">Message personnalisé :</div>
                <textarea className="border rounded px-2 py-1 w-full mb-4" value={relanceMsg} onChange={e => setRelanceMsg(e.target.value)} />
                <div className="mb-4 flex gap-2 items-center">
                  <label className="font-semibold">Canal :</label>
                  <select className="border rounded px-2 py-1" value={relanceCanal} onChange={e => setRelanceCanal(e.target.value)}>
                    <option value="email">Email</option>
                    <option value="sms">SMS</option>
                  </select>
                  <label className="font-semibold ml-4">Planifier :</label>
                  <input type="checkbox" checked={relancePlanif} onChange={e => setRelancePlanif(e.target.checked)} />
                  {relancePlanif && (
                    <input type="date" className="border rounded px-2 py-1 ml-2" value={relancePlanifDate} onChange={e => setRelancePlanifDate(e.target.value)} />
                  )}
                </div>
                <button className="bg-[#2F5FDE] text-white px-6 py-2 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition w-full" onClick={confirmRelance}>{relancePlanif ? 'Planifier la relance' : 'Envoyer la relance'}</button>
              </div>
            </div>
          )}
          {/* Modal gestion modèles */}
          {showModeles && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => { setShowModeles(false); setEditModele(null); setModeleNom(''); setModeleMsg(''); }}>&times;</button>
                <h3 className="text-xl font-bold mb-4 text-[#2F5FDE]">Modèles de messages</h3>
                {modeles.map(m => (
                  <div key={m.id} className="mb-2 border rounded p-2 flex flex-col">
                    {editModele && editModele.id === m.id ? (
                      <>
                        <input className="border rounded px-2 py-1 mb-1" value={modeleNom} onChange={e => setModeleNom(e.target.value)} placeholder="Nom" />
                        <textarea className="border rounded px-2 py-1 mb-1" value={modeleMsg} onChange={e => setModeleMsg(e.target.value)} placeholder="Message" />
                        <div className="flex gap-2">
                          <button className="bg-[#2F5FDE] text-white px-2 py-1 rounded" onClick={handleEditModeleSave}>Enregistrer</button>
                          <button className="text-xs text-gray-500 underline" onClick={() => setEditModele(null)}>Annuler</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="font-semibold">{m.nom}</div>
                        <div className="text-xs text-gray-500 mb-1">{m.message}</div>
                        <div className="flex gap-2">
                          <button className="text-xs text-[#2F5FDE] underline" onClick={() => { setEditModele(m); setModeleNom(m.nom); setModeleMsg(m.message); }}>Éditer</button>
                          <button className="text-xs text-[#EF4444] underline" onClick={() => handleDeleteModele(m.id)}>Supprimer</button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div className="mt-4 border-t pt-4">
                  <input className="border rounded px-2 py-1 mb-1 w-full" value={modeleNom} onChange={e => setModeleNom(e.target.value)} placeholder="Nom du modèle" />
                  <textarea className="border rounded px-2 py-1 mb-1 w-full" value={modeleMsg} onChange={e => setModeleMsg(e.target.value)} placeholder="Message du modèle" />
                  <button className="bg-[#2F5FDE] text-white px-4 py-1 rounded w-full" onClick={handleAddModele}>Ajouter le modèle</button>
                </div>
              </div>
            </div>
          )}
          {/* Modal historique relances */}
          {showHistory && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowHistory(null)}>&times;</button>
                <h3 className="text-xl font-bold mb-2 text-[#2F5FDE]">Historique des relances</h3>
                <ul className="divide-y divide-[#E9F0FF]">
                  {showHistory.history && showHistory.history.length > 0 ? (
                    showHistory.history.map((r, i) => (
                      <li key={i} className="py-2 flex flex-col">
                        <div className="flex justify-between"><span>{formatDate(r.date)}</span><span className="text-xs text-gray-400">{r.canal}</span></div>
                        <div className="text-xs">{r.message}</div>
                        <div className="text-xs text-gray-500">Statut : {r.statut}{r.planifDate && ` (planifiée pour ${formatDate(r.planifDate)})`}</div>
                      </li>
                    ))
                  ) : <li className="py-4 text-gray-400">Aucune relance</li>}
                </ul>
              </div>
            </div>
          )}
          {/* Modal historique global */}
          {showGlobalHistory && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl relative">
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl" onClick={() => setShowGlobalHistory(false)}>&times;</button>
                <h3 className="text-xl font-bold mb-2 text-[#2F5FDE]">Historique global des relances</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#E9F0FF]">
                      <th className="p-2 text-left">Date</th>
                      <th className="p-2 text-left">Type</th>
                      <th className="p-2 text-left">Destinataire</th>
                      <th className="p-2 text-left">Objet</th>
                      <th className="p-2 text-left">Message</th>
                      <th className="p-2 text-left">Canal</th>
                      <th className="p-2 text-left">Statut</th>
                      <th className="p-2 text-left">Planifiée pour</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allHistory.length === 0 && <tr><td colSpan={8} className="py-4 text-gray-400 text-center">Aucune relance</td></tr>}
                    {allHistory.map((h, i) => (
                      <tr key={i}>
                        <td className="p-2">{formatDate(h.date)}</td>
                        <td className="p-2 capitalize">{h.type}</td>
                        <td className="p-2">{h.destinataire}</td>
                        <td className="p-2">{h.objet}</td>
                        <td className="p-2">{h.message}</td>
                        <td className="p-2">{h.canal}</td>
                        <td className="p-2">{h.statut}</td>
                        <td className="p-2">{h.planifDate ? formatDate(h.planifDate) : ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
    </Layout>
  );
} 