import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, DocumentTextIcon, UserIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#2F5FDE] text-white flex flex-col p-4 fixed md:relative z-20">
      <div className="flex items-center gap-3 mb-8">
        <Image src="/logo-xcfa.png" alt="Logo XCFA" width={36} height={36} className="rounded" />
        <span className="text-2xl font-bold tracking-tight">XCFA</span>
      </div>
      <nav className="flex flex-col gap-2 flex-1">
        <Link href="/" className="flex items-center gap-3 hover:bg-[#E9F0FF] hover:text-[#2F5FDE] rounded px-3 py-2 transition">
          <HomeIcon className="h-5 w-5" /> Accueil
        </Link>
        <Link href="/dashboard" className="flex items-center gap-3 hover:bg-[#E9F0FF] hover:text-[#2F5FDE] rounded px-3 py-2 transition">
          <HomeIcon className="h-5 w-5" /> Dashboard
        </Link>
        <Link href="/contrats/nouveau" className="flex items-center gap-3 hover:bg-[#E9F0FF] hover:text-[#2F5FDE] rounded px-3 py-2 transition">
          <PlusCircleIcon className="h-5 w-5" /> Nouveau Contrat
        </Link>
        <Link href="/conventions/nouvelle" className="flex items-center gap-3 hover:bg-[#E9F0FF] hover:text-[#2F5FDE] rounded px-3 py-2 transition">
          <DocumentTextIcon className="h-5 w-5" /> Nouvelle Convention
        </Link>
        <Link href="/profile" className="flex items-center gap-3 hover:bg-[#E9F0FF] hover:text-[#2F5FDE] rounded px-3 py-2 transition mt-auto">
          <UserIcon className="h-5 w-5" /> Profil
        </Link>
      </nav>
    </aside>
  );
} 