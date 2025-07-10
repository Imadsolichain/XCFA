import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-[92vw] max-w-5xl bg-white rounded-3xl shadow-2xl flex items-center justify-between px-12 py-4 z-50 border border-[#E9F0FF]">
      <div className="flex items-center">
        <span className="text-4xl font-extrabold text-[#2F5FDE] tracking-tight">XCFA</span>
      </div>
      <div className="flex items-center gap-10 ml-8">
        <Link href="/" className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition text-lg">Accueil</Link>
        <Link href="/dashboard" className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition text-lg">Dashboard</Link>
        <Link href="/contrats/nouveau" className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition text-lg">Nouveau Contrat</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/sign-up" className="px-6 py-2 rounded-xl bg-[#E9F0FF] text-[#2F5FDE] font-semibold hover:bg-[#2F5FDE] hover:text-white transition text-lg">S'inscrire</Link>
        <Link href="/login" className="px-6 py-2 rounded-xl bg-[#2F5FDE] text-white font-semibold hover:bg-[#1e3a8a] transition text-lg">Se connecter</Link>
      </div>
    </nav>
  );
} 