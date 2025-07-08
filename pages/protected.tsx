import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import Layout from '../components/Layout';

export default function ProtectedPage() {
  return (
    <Layout title="Protected">
      <SignedIn>
        <h1>Page protégée</h1>
        <p>Vous êtes connecté et pouvez voir ce contenu.</p>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </Layout>
  );
} 