import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Layout title="Accueil">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#E9F0FF] via-[#F4F6F8] to-[#2F5FDE]">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl gap-12 p-8">
          {/* Illustration à gauche */}
          <div className="flex-1 flex items-center justify-center">
            <Image src="/logo-xcfa.png" alt="Logo XCFA" width={140} height={140} className="mb-6" />
          </div>
          {/* Texte d'accroche à droite */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[#2F5FDE]">
              Plateforme CFA&nbsp;
              <span className="text-[#12B76A]">simple</span>,&nbsp;
              <span className="text-[#2F5FDE]">rapide</span> et&nbsp;
              <span className="text-[#EF4444]">sécurisée</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#333] mb-8 max-w-xl leading-relaxed">
              Gérez contrats, conventions et facturation en toute simplicité. Connexion OPCO, gestion moderne, tout en ligne.
            </p>
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <Link href="/dashboard" className="px-8 py-3 rounded-xl bg-[#2F5FDE] text-white font-semibold text-lg shadow hover:bg-[#1e3a8a] transition text-center">Découvrir</Link>
              <Link href="/sign-up" className="px-8 py-3 rounded-xl bg-white border border-[#2F5FDE] text-[#2F5FDE] font-semibold text-lg shadow hover:bg-[#E9F0FF] transition text-center">Créer un compte</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
