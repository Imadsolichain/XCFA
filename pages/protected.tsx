import Layout from '../components/Layout';

export default function ProtectedPage() {
  return (
    <Layout title="Protected">
      <h1>Page protégée (auth désactivée)</h1>
      <p>Vous êtes sur une page qui nécessitait l'authentification, mais Clerk est désactivé pour test.</p>
    </Layout>
  );
} 