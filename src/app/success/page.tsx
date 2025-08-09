import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="w-full max-w-xl mx-auto text-center space-y-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow">
        <div className="text-5xl">✅</div>
        <h1 className="text-2xl font-bold">Envoi réussi</h1>
        <p className="text-gray-600">Le document a été transmis à Yousign (sandbox).</p>
        <div className="flex gap-3 justify-center pt-4">
          <Link href="/" className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 font-semibold">Nouvel envoi</Link>
          <Link href="/events" className="rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 font-semibold">Voir les événements</Link>
          <Link href="/signers" className="rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 px-4 py-2 font-semibold">Voir les signataires</Link>
        </div>
      </div>
    </div>
  );
}
