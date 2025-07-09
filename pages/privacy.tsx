import React from 'react';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout title="Confidentialité">
      <h1 className="text-2xl font-bold mb-4">Politique de confidentialité</h1>
      <p className="mb-2">Cette application respecte le RGPD. Vos données sont stockées de façon sécurisée et ne sont jamais revendues à des tiers.</p>
      <ul className="list-disc pl-6 mb-2">
        <li>Vous pouvez demander la suppression de votre compte à tout moment.</li>
        <li>Les logs d’activité sont conservés pour la sécurité et la traçabilité.</li>
        <li>Les notifications et e-mails sont transactionnels uniquement.</li>
      </ul>
      <p>Pour toute question ou demande, contactez l’administrateur du CFA.</p>
    </Layout>
  );
} 