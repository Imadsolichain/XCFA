import Layout from '../components/Layout';

export default function OpcoPage() {
  return (
    <Layout title="OPCO">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Gestion OPCO</h1>
        <p className="mb-8 text-gray-700">Connectez-vous à votre OPCO, suivez les dossiers, exportez les données et automatisez vos démarches.</p>
        <button className="bg-[#2F5FDE] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition">Connexion OPCO</button>
      </div>
    </Layout>
  );
} 