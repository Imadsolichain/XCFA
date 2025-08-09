import { getServiceSupabaseClient } from '../../lib/supabaseClient';

export const dynamic = 'force-dynamic';

async function getEvents() {
  const supabase = getServiceSupabaseClient();
  if (!supabase) return [] as any[];
  const { data } = await supabase
    .from('yousign_events')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);
  return data || [];
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Événements Yousign</h1>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Signature</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payload</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-500">Aucun événement pour le moment.</td>
              </tr>
            )}
            {events.map((evt: any) => (
              <tr key={evt.id}>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{new Date(evt.created_at).toLocaleString('fr-FR')}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{evt.event_type}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${evt.signature_valid ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {evt.signature_valid ? 'Valide' : 'Invalide'}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-gray-600 max-w-[0]">
                  <pre className="whitespace-pre-wrap break-words max-w-xl">{JSON.stringify(evt.payload, null, 2)}</pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
