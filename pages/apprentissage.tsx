import Layout from '../components/Layout';

export default function ApprentissagePage() {
  return (
    <Layout title="Apprentissage">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Gestion des contrats d'apprentissage</h1>
        <p className="mb-8 text-gray-700">Créez, gérez et signez électroniquement vos contrats d'apprentissage. Génération PDF, relances, facturation OPCO intégrées.</p>
        <button className="bg-[#2F5FDE] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition">Nouveau contrat d'apprentissage</button>
      </div>
    </Layout>
  );
} 