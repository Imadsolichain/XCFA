import Layout from '../components/Layout';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function ProtectedPage() {
  return (
    <>
      <SignedIn>
        <Layout title="Protected">
          <h1>Page protégée</h1>
          <p>Vous êtes sur une page qui nécessite l'authentification.</p>
        </Layout>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
} 