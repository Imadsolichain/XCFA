import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, DocumentTextIcon, UserIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  const links = [
    { href: '/', label: 'Accueil', icon: <HomeIcon className="h-5 w-5" /> },
    { href: '/dashboard', label: 'Dashboard', icon: <HomeIcon className="h-5 w-5" /> },
    { href: '/contrats/nouveau', label: 'Nouveau Contrat', icon: <PlusCircleIcon className="h-5 w-5" /> },
    { href: '/conventions/nouvelle', label: 'Nouvelle Convention', icon: <DocumentTextIcon className="h-5 w-5" /> },
    { href: '/profile', label: 'Profil', icon: <UserIcon className="h-5 w-5" /> },
  ];
  return (
    <aside className="w-64 h-screen bg-[#2F5FDE] text-white flex flex-col p-6 fixed md:relative z-20 shadow-xl">
      <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow mb-10 mx-auto">
        <Image src="/logo-xcfa.png" alt="Logo XCFA" width={56} height={56} />
      </div>
      <nav className="flex flex-col gap-3 flex-1">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-[#E9F0FF] hover:text-[#2F5FDE] shadow-sm ${router.pathname === link.href ? 'bg-white text-[#2F5FDE] font-bold shadow-md' : ''}`}
          >
            {link.icon} {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 