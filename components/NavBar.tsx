import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import { HomeIcon, ClipboardDocumentListIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

export default function NavBar() {
  const { user } = useUser();
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-[#E9F0FF] shadow-sm fixed top-0 left-0 z-30 flex items-center justify-between px-8 h-16">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/logo-xcfa.svg" alt="Logo XCFA" width={36} height={36} className="rounded bg-white shadow" />
        </Link>
        <span className="text-xl font-extrabold text-[#2F5FDE] tracking-tight">XCFA</span>
        <Link href="/" className="ml-8 flex items-center gap-2 text-[#2F5FDE] font-semibold hover:underline"><HomeIcon className="h-5 w-5" /> Accueil</Link>
        <Link href="/dashboard" className="ml-4 flex items-center gap-2 text-[#2F5FDE] font-semibold hover:underline"><ClipboardDocumentListIcon className="h-5 w-5" /> Dashboard</Link>
        <Link href="/contrats/nouveau" className="ml-4 flex items-center gap-2 text-[#2F5FDE] font-semibold hover:underline"><PlusCircleIcon className="h-5 w-5" /> Nouveau Contrat</Link>
      </div>
      <div className="flex items-center gap-4">
        {user && <UserButton afterSignOutUrl="/login" />}
      </div>
    </nav>
  );
} 