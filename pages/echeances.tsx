import Layout from '../components/Layout';
import { CalendarIcon } from '@heroicons/react/24/outline';

export default function EcheancesPage() {
  return (
    <Layout title="Suivi des échéances">
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <CalendarIcon className="h-20 w-20 text-[#2F5FDE]/30 mb-4" />
        <div className="font-bold text-xl mb-2">Vue d'ensemble des échéances</div>
        <div className="text-gray-500 mb-6">Aucune échéance à afficher pour le moment.</div>
      </div>
    </Layout>
  );
} 