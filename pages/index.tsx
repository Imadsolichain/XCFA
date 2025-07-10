import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <Layout title="Accueil">
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center w-full max-w-lg">
          <Image src="/logo-xcfa.png" alt="Logo XCFA" width={80} height={80} className="mb-4" />
          <h1 className="text-4xl font-extrabold text-[#2F5FDE] mb-2">Bienvenue sur XCFA</h1>
          <p className="text-lg text-[#333333] mb-6 text-center">La plateforme moderne pour la gestion des contrats et conventions d'alternance.</p>
          <SignedOut>
            <div className="flex gap-4">
              <SignInButton>
                <button className="bg-[#2F5FDE] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#1e3a8a] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F5FDE]">Se connecter</button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-white text-[#2F5FDE] border border-[#2F5FDE] px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#E9F0FF] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F5FDE]">Créer un compte</button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" className="bg-[#2F5FDE] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#1e3a8a] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2F5FDE] mt-4">Accéder au dashboard</Link>
          </SignedIn>
        </div>
      </div>
    </Layout>
  );
}
