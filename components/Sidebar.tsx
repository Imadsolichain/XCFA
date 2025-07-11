import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  HomeIcon,
  AcademicCapIcon,
  UsersIcon,
  BriefcaseIcon,
  ClipboardIcon,
  CalendarIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

const navLinks = [
  { href: '/dashboard', label: 'Tableau de bord', icon: <HomeIcon className="h-6 w-6" /> },
  { href: '/formations', label: 'Formations', icon: <AcademicCapIcon className="h-6 w-6" /> },
  { href: '/promotions', label: 'Promotions', icon: <UsersIcon className="h-6 w-6" /> },
  { href: '/dossiers', label: 'Dossiers', icon: <ClipboardIcon className="h-6 w-6" /> },
  { href: '/echeances', label: 'Échéances', icon: <CalendarIcon className="h-6 w-6" /> },
  { href: '/etudiants', label: 'Étudiants', icon: <UserGroupIcon className="h-6 w-6" /> },
  { href: '/entreprises', label: 'Entreprises', icon: <BuildingOffice2Icon className="h-6 w-6" /> },
  { href: '/utilisateurs', label: 'Utilisateurs', icon: <BriefcaseIcon className="h-6 w-6" /> },
];

export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className="w-64 h-screen bg-[#2F5FDE] text-white flex flex-col p-6 fixed top-0 left-0 z-20 shadow-[8px_0_24px_-8px_rgba(47,95,222,0.10)] rounded-br-3xl">
      <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow mb-10 mx-auto">
        <Image src="/logo-xcfa.png" alt="Logo XCFA" width={56} height={56} />
      </div>
      <nav className="flex flex-col gap-2 flex-1">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-[#E9F0FF] hover:text-[#2F5FDE] shadow-sm ${router.pathname.startsWith(link.href) ? 'bg-white text-[#2F5FDE] font-bold shadow-md' : ''}`}
          >
            {link.icon} <span className="text-base">{link.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-8 flex flex-col items-center gap-2">
        <Link href="/support" className="flex items-center gap-2 text-xs text-white/80 hover:text-white"><QuestionMarkCircleIcon className="h-5 w-5" />Support</Link>
        {/* Placeholder pour le menu utilisateur en bas */}
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mt-4">
          <span className="font-bold text-lg">AM</span>
        </div>
      </div>
    </aside>
  );
} 