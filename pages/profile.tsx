import React from 'react';
import Layout from '../components/Layout';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

function SectionEtudiant({ user }: { user: any }) {
  return (
    <div className="bg-[#E9F0FF] rounded-xl shadow p-6 w-full max-w-lg mx-auto mb-6">
      <h3 className="text-xl font-bold text-[#2F5FDE] mb-2">Espace Étudiant</h3>
      <div className="text-gray-700 mb-1"><span className="font-semibold">Nom :</span> {user?.lastName} {user?.firstName}</div>
      <div className="text-gray-700 mb-1"><span className="font-semibold">Email :</span> {user?.primaryEmailAddress?.emailAddress}</div>
      <div className="text-gray-700 mb-1"><span className="font-semibold">ID :</span> {user?.id}</div>
      <div className="text-gray-700"><span className="font-semibold">Rôle :</span> Étudiant</div>
    </div>
  );
}

function SectionEcole({ user }: { user: any }) {
  return (
    <div className="bg-[#F4F6F8] rounded-xl shadow p-6 w-full max-w-lg mx-auto mb-6">
      <h3 className="text-xl font-bold text-[#2F5FDE] mb-2">Espace École</h3>
      <div className="text-gray-700 mb-1"><span className="font-semibold">Nom :</span> {user?.lastName} {user?.firstName}</div>
      <div className="text-gray-700 mb-1"><span className="font-semibold">Email :</span> {user?.primaryEmailAddress?.emailAddress}</div>
      <div className="text-gray-700 mb-1"><span className="font-semibold">ID :</span> {user?.id}</div>
      <div className="text-gray-700"><span className="font-semibold">Rôle :</span> École</div>
    </div>
  );
}

function SectionAdmin({ user }: { user: any }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-lg mx-auto mb-6 border border-[#2F5FDE]">
      <h3 className="text-xl font-bold text-[#2F5FDE] mb-2">Espace Admin</h3>
      <div className="text-gray-700 mb-1"><span className="font-semibold">Nom :</span> {user?.lastName} {user?.firstName}</div>
      <div className="text-gray-700 mb-1"><span className="font-semibold">Email :</span> {user?.primaryEmailAddress?.emailAddress}</div>
      <div className="text-gray-700 mb-1"><span className="font-semibold">ID :</span> {user?.id}</div>
      <div className="text-gray-700"><span className="font-semibold">Rôle :</span> Admin</div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <>
      <SignedIn>
        <Layout title="Profil">
          <div className="max-w-2xl mx-auto flex flex-col items-center mt-10">
            <h2 className="text-2xl font-bold text-[#2F5FDE] mt-4 mb-6">Mon profil</h2>
            {/* Affichage des infos utilisateur ici */}
          </div>
        </Layout>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
} 