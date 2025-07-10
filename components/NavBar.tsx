import React, { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [showRessources, setShowRessources] = useState(false);
  const [showTarifs, setShowTarifs] = useState(false);

  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-[92vw] max-w-5xl bg-white rounded-3xl shadow-2xl flex items-center justify-between px-12 py-4 z-50 border border-[#E9F0FF]">
      <div className="flex items-center">
        <span className="text-4xl font-extrabold text-[#2F5FDE] tracking-tight">XCFA</span>
      </div>
      <div className="flex items-center gap-10 ml-8 relative">
        <Link href="/" className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition text-lg">Accueil</Link>
        <button
          className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition text-lg relative"
          onMouseEnter={() => setShowTarifs(true)}
          onMouseLeave={() => setShowTarifs(false)}
        >
          Tarifs
          {showTarifs && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4 z-50 border border-[#E9F0FF]">
              {/* Ajoute ici les sous-liens de Tarifs si besoin */}
              <span className="text-gray-500 italic">À venir</span>
            </div>
          )}
        </button>
        <button
          className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition text-lg relative"
          onMouseEnter={() => setShowRessources(true)}
          onMouseLeave={() => setShowRessources(false)}
        >
          Ressources <span className="ml-1">▾</span>
          {showRessources && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4 z-50 border border-[#E9F0FF]">
              <Link href="/blog" className="font-semibold text-[#555] hover:text-[#2F5FDE] transition text-lg">Blog</Link>
              <Link href="/faq" className="font-semibold text-[#555] hover:text-[#2F5FDE] transition text-lg">FAQ</Link>
            </div>
          )}
        </button>
        <Link href="/contact" className="text-[#2F5FDE] font-semibold hover:text-[#1e3a8a] transition text-lg">Contact</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/sign-up" className="px-6 py-2 rounded-xl bg-[#E9F0FF] text-[#2F5FDE] font-semibold hover:bg-[#2F5FDE] hover:text-white transition text-lg">S'inscrire</Link>
        <Link href="/login" className="px-6 py-2 rounded-xl bg-[#2F5FDE] text-white font-semibold hover:bg-[#1e3a8a] transition text-lg">Se connecter</Link>
      </div>
    </nav>
  );
} 