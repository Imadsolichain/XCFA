import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-5xl bg-white rounded-2xl shadow-xl flex items-center justify-between px-8 py-3 z-50 border border-[#E9F0FF]">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/logo-xcfa.png" alt="Logo XCFA" width={40} height={40} className="rounded" />
        </Link>
        <span className="text-2xl font-extrabold text-[#2F5FDE] tracking-tight">XCFA</span>
      </div>
      <div className="flex items-center gap-8 ml-8">
        <Link href="/" className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition">Accueil</Link>
        <Link href="/dashboard" className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition">Dashboard</Link>
        <Link href="/contrats/nouveau" className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition">Nouveau Contrat</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/sign-up" className="px-5 py-2 rounded-xl bg-[#E9F0FF] text-[#2F5FDE] font-semibold hover:bg-[#2F5FDE] hover:text-white transition">S'inscrire</Link>
        <Link href="/login" className="px-5 py-2 rounded-xl bg-[#2F5FDE] text-white font-semibold hover:bg-[#1e3a8a] transition">Se connecter</Link>
      </div>
    </nav>
  );
} 