import Layout from '../components/Layout';

export default function CerfaP2SPage() {
  return (
    <Layout title="Cerfa P2S">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-[#2F5FDE] mb-4">Cerfa P2S</h1>
        <p className="mb-8 text-gray-700">Générez et téléchargez le formulaire Cerfa P2S pour vos démarches administratives.</p>
        <button className="bg-[#2F5FDE] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition">Nouveau Cerfa P2S</button>
      </div>
    </Layout>
  );
} 