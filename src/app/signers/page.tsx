import { getServiceSupabaseClient } from '../../lib/supabaseClient';

export const dynamic = 'force-dynamic';

async function getSigners() {
  const supabase = getServiceSupabaseClient();
  if (!supabase) return [] as any[];
  const { data } = await supabase
    .from('signers')
    .select('id, first_name, last_name, email, created_at')
    .order('created_at', { ascending: false })
    .limit(100);
  return data || [];
}

export default async function SignersPage() {
  const signers = await getSigners();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Signataires</h1>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {signers.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-500">Aucun signataire enregistré.</td>
              </tr>
            )}
            {signers.map((s: any) => (
              <tr key={s.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{new Date(s.created_at).toLocaleString('fr-FR')}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{s.first_name}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{s.last_name}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
