import Layout from '../components/Layout';

export default function FacturationPage() {
  return (
    <Layout title="Facturation">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Facturation OPCO</h1>
        <p className="mb-8 text-gray-700">Générez et téléchargez vos factures OPCO. Suivi des paiements, export comptable, génération PDF.</p>
        <button className="bg-[#2F5FDE] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition">Nouvelle facture OPCO</button>
      </div>
    </Layout>
  );
} 