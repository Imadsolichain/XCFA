import { withRole } from '../../utils/withRole';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

function ContratDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [contrat, setContrat] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/contrats/${id}`)
        .then(res => res.json())
        .then(data => {
          setContrat(data);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <Layout>Chargement...</Layout>;
  if (!contrat) return <Layout>Contrat introuvable</Layout>;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Contrat #{contrat.id}</h1>
      <div className="mb-2">Type : {contrat.type}</div>
      <div className="mb-2">Statut : {contrat.statut}</div>
      <div className="mb-2">Créé le : {new Date(contrat.createdAt).toLocaleDateString()}</div>
      {/* Ajoute ici d'autres infos selon le modèle */}
    </Layout>
  );
}

export default withRole(ContratDetailPage, ['CFA_ADMIN', 'ENTREPRISE', 'APPRENANT']); 