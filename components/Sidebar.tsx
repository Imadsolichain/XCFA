import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-900 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-8">XCFA</div>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:bg-gray-800 rounded px-3 py-2">Dashboard</Link>
        <Link href="/contrats/nouveau" className="hover:bg-gray-800 rounded px-3 py-2">Nouveau Contrat</Link>
      </nav>
    </aside>
  );
} 