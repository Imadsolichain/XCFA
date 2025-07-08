import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    // Redirige automatiquement si connecté
    // (optionnel, peut être retiré si tu veux une vraie page d'accueil)
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <SignedIn>
        <div className="text-2xl font-bold mb-4">Bienvenue sur XCFA !</div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => router.push('/dashboard')}
        >
          Accéder au dashboard
        </button>
      </SignedIn>
      <SignedOut>
        <div className="text-2xl font-bold mb-4">Bienvenue sur XCFA !</div>
        <div className="flex gap-4">
          <SignInButton>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Se connecter</button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded">Créer un compte</button>
          </SignUpButton>
        </div>
      </SignedOut>
    </div>
  );
}
