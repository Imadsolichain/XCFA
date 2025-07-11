import Layout from '../components/Layout';
import { UserGroupIcon } from '@heroicons/react/24/outline';

export default function EtudiantsPage() {
  return (
    <Layout title="Liste des étudiants">
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <UserGroupIcon className="h-20 w-20 text-[#2F5FDE]/30 mb-4" />
        <div className="font-bold text-xl mb-2">Vous n'avez pas encore d'étudiants</div>
        <div className="text-gray-500 mb-6">Commencez par créer un étudiant pour gérer son contrat.</div>
      </div>
    </Layout>
  );
} 