import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'CFA', href: null },
  { label: 'Entreprise', href: null },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Ressources', href: null },
  { label: 'Contact', href: null },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E9F0FF] via-[#F4F6F8] to-[#F4F6F8] flex flex-col">
      {/* Header navigation */}
      <header className="w-full flex items-center justify-between px-6 md:px-12 py-6 bg-white/90 shadow-sm rounded-b-3xl sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Image src="/logo-xcfa.png" alt="Logo XCFA" width={48} height={48} />
          <span className="text-2xl font-extrabold text-[#2F5FDE] tracking-tight">XCFA</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[#333] font-medium">
          {navLinks.map(link => link.href ? (
            <Link key={link.label} href={link.href} className="hover:text-[#2F5FDE] transition-colors">{link.label}</Link>
          ) : (
            <span key={link.label} className="text-gray-400 cursor-not-allowed" aria-disabled="true">{link.label}</span>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/sign-up" className="px-5 py-2 rounded-xl border border-[#2F5FDE] text-[#2F5FDE] font-semibold bg-white hover:bg-[#E9F0FF] active:bg-[#E9F0FF] transition-colors shadow-sm">S'inscrire</Link>
          <Link href="/login" className="px-5 py-2 rounded-xl bg-[#2F5FDE] text-white font-semibold hover:bg-[#1e3a8a] active:bg-[#1e3a8a] transition-colors shadow">Se connecter</Link>
        </div>
      </header>
      {/* Hero section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-12">
        <div className="max-w-2xl mt-20 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#333] mb-6 leading-tight">
            Une gestion innovante, simple et transparente<br />
            <span className="text-[#2F5FDE]">pour les CFA et centres de formation</span>
          </h1>
          <p className="text-lg md:text-xl text-[#333] mb-8">
            Optimisez la gestion de vos contrats, gagnez du temps et concentrez-vous sur l’essentiel.<br />
            Découvrez une solution pensée pour moderniser et faciliter le quotidien des équipes pédagogiques et administratives.
          </p>
          <div className="text-base text-[#2F5FDE] font-semibold mb-8">
            Notre plateforme accompagne les CFA et centres de formation dans leur transformation digitale,<br />
            avec des outils intuitifs, des workflows automatisés et une tarification claire, sans surprise.
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="px-8 py-3 rounded-xl bg-[#2F5FDE] text-white font-bold text-lg shadow hover:bg-[#1e3a8a] active:bg-[#1e3a8a] transition-colors">Commencer maintenant</Link>
            <Link href="#tarifs" className="px-8 py-3 rounded-xl border border-[#2F5FDE] text-[#2F5FDE] font-bold text-lg bg-white hover:bg-[#E9F0FF] active:bg-[#E9F0FF] transition-colors">Voir les tarifs</Link>
          </div>
        </div>
        {/* Illustration ou image */}
        <div className="mt-8">
          <Image src="/logo-xcfa.png" alt="Illustration" width={120} height={120} className="mx-auto rounded-2xl shadow" />
        </div>
      </main>
      {/* Footer (optionnel) */}
      <footer className="w-full py-6 bg-white/80 border-t border-[#E9F0FF] text-center text-sm text-[#333] rounded-t-3xl shadow-inner">
        © {new Date().getFullYear()} XCFA — Plateforme pour CFA & centres de formation
      </footer>
    </div>
  );
}
