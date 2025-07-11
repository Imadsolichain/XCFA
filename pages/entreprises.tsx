import Layout from '../components/Layout';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function EntreprisesPage() {
  return (
    <Layout title="Entreprises">
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <BuildingOffice2Icon className="h-20 w-20 text-[#2F5FDE]/30 mb-4" />
        <div className="font-bold text-xl mb-2">Vous n'avez pas encore d'entreprise</div>
        <div className="text-gray-500 mb-6">Commencez par créer un étudiant pour créer son entreprise et gérer son contrat.</div>
      </div>
    </Layout>
  );
} 