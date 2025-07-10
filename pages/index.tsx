import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function HomePage() {
  const [logoError, setLogoError] = useState(false);
  return (
    <Layout title="Accueil">
      <div className="flex items-center justify-center min-h-screen bg-[#F4F6F8]">
        <div className="bg-white/90 rounded-3xl shadow-2xl p-12 flex flex-col items-center w-full max-w-xl transition-transform hover:-translate-y-1 hover:shadow-3xl duration-300 border border-[#E9F0FF]">
          {!logoError ? (
            <Image src="/logo-xcfa.svg" alt="Logo XCFA" width={90} height={90} className="mb-6 rounded-xl shadow bg-white" onError={() => setLogoError(true)} />
          ) : (
            <div className="mb-6 w-[90px] h-[90px] flex items-center justify-center bg-[#E9F0FF] rounded-xl text-[#2F5FDE] text-4xl font-bold">XCFA</div>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2F5FDE] mb-3 text-center leading-tight drop-shadow">Bienvenue sur XCFA</h1>
          <p className="text-lg md:text-xl text-[#333333] mb-8 text-center leading-relaxed">La plateforme moderne pour la gestion des contrats et conventions d'alternance.</p>
          <SignedOut>
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              <SignInButton>
                <button className="w-full md:w-auto bg-[#2F5FDE] text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F5FDE] text-lg">Se connecter</button>
              </SignInButton>
              <SignUpButton>
                <button className="w-full md:w-auto bg-white text-[#2F5FDE] border border-[#2F5FDE] px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#E9F0FF] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F5FDE] text-lg">Créer un compte</button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" className="w-full md:w-auto bg-[#2F5FDE] text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#1e3a8a] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F5FDE] text-lg mt-4 text-center">Accéder au dashboard</Link>
          </SignedIn>
        </div>
      </div>
    </Layout>
  );
}
