import Layout from '../components/Layout';

export default function RecuperationSommesPage() {
  return (
    <Layout title="Récupération sommes">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Récupération des sommes OPCO</h1>
        <p className="mb-8 text-gray-700">Suivez et récupérez les versements OPCO liés à vos contrats et conventions.</p>
        <button className="bg-[#2F5FDE] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition">Nouvelle récupération OPCO</button>
      </div>
    </Layout>
  );
} 