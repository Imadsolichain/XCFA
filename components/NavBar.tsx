import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [showRessources, setShowRessources] = useState(false);
  const [showTarifs, setShowTarifs] = useState(false);
  const [showCFA, setShowCFA] = useState(false);

  return (
    <nav className="fixed top-10 left-64 w-[calc(100vw-16rem-3vw)] max-w-5xl bg-white rounded-3xl shadow-2xl flex items-center justify-between px-10 py-3 z-50 border border-[#E9F0FF]">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold text-[#2F5FDE] tracking-tight">XCFA</span>
      </div>
      <div className="flex items-center gap-6 ml-8 relative">
        <Link href="/" className="text-[#2F5FDE] font-medium hover:text-[#1e3a8a] transition text-base">Accueil</Link>
        <div className="relative">
          <button
            className="text-[#2F5FDE] font-medium hover:text-[#1e3a8a] transition text-base flex items-center gap-1"
            onMouseEnter={() => setShowCFA(true)}
            onMouseLeave={() => setShowCFA(false)}
            onFocus={() => setShowCFA(true)}
            onBlur={() => setShowCFA(false)}
          >
            CFA <span className="text-xs">▼</span>
          </button>
          {showCFA && (
            <div className="absolute left-0 top-full mt-2 w-60 bg-white rounded-2xl shadow-2xl p-4 flex flex-col gap-2 z-50 border border-[#E9F0FF]">
              <Link href="/apprentissage" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">Apprentissage</Link>
              <Link href="/professionnalisation" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">Professionnalisation</Link>
              <Link href="/stage" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">Stage</Link>
              <Link href="/facturation" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">Facturation</Link>
              <Link href="/cerfa-p2s" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">Cerfa P2S</Link>
              <Link href="/cerfa-proa" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">Cerfa Pro-A</Link>
              <Link href="/recuperation-sommes" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">Récupération sommes</Link>
              <Link href="/opco" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">OPCO</Link>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="text-[#2F5FDE] font-medium hover:text-[#1e3a8a] transition text-base flex items-center gap-1"
            onMouseEnter={() => setShowTarifs(true)}
            onMouseLeave={() => setShowTarifs(false)}
            onFocus={() => setShowTarifs(true)}
            onBlur={() => setShowTarifs(false)}
          >
            Tarifs <span className="text-xs">▼</span>
          </button>
          {showTarifs && (
            <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-2xl p-4 flex flex-col gap-2 z-50 border border-[#E9F0FF]">
              <span className="text-gray-500 italic text-sm">À venir</span>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className="text-[#2F5FDE] font-medium hover:text-[#1e3a8a] transition text-base flex items-center gap-1"
            onMouseEnter={() => setShowRessources(true)}
            onMouseLeave={() => setShowRessources(false)}
            onFocus={() => setShowRessources(true)}
            onBlur={() => setShowRessources(false)}
          >
            Ressources <span className="text-xs">▼</span>
          </button>
          {showRessources && (
            <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-2xl p-4 flex flex-col gap-2 z-50 border border-[#E9F0FF]">
              <Link href="/blog" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">Blog</Link>
              <Link href="/faq" className="font-medium text-[#555] hover:text-[#2F5FDE] transition text-base">FAQ</Link>
            </div>
          )}
        </div>
        <Link href="/contact" className="text-[#2F5FDE] font-medium hover:text-[#1e3a8a] transition text-base">Contact</Link>
      </div>
      {/* <div className="flex items-center gap-3">
        {!user ? (
          <>
            <Link href="/sign-up" className="px-5 py-2 rounded-xl bg-[#E9F0FF] text-[#2F5FDE] font-semibold hover:bg-[#2F5FDE] hover:text-white transition text-base">S'inscrire</Link>
            <Link href="/login" className="px-5 py-2 rounded-xl bg-[#2F5FDE] text-white font-semibold hover:bg-[#1e3a8a] transition text-base">Se connecter</Link>
          </>
        ) : (
          <UserButton afterSignOutUrl="/login" />
        )}
      </div> */}
    </nav>
  );
} 