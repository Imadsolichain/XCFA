const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Utilisateurs de démo
  const cfa = await prisma.user.create({
    data: {
      email: 'cfa@example.com',
      firstname: 'CFA',
      lastname: 'Admin',
      role: 'CFA_ADMIN',
    },
  });
  const entreprise = await prisma.user.create({
    data: {
      email: 'entreprise@example.com',
      firstname: 'Entreprise',
      lastname: 'Boss',
      role: 'ENTREPRISE',
    },
  });
  const apprenant = await prisma.user.create({
    data: {
      email: 'apprenant@example.com',
      firstname: 'Apprenant',
      lastname: 'Test',
      role: 'APPRENANT',
    },
  });

  // Contrats de démo
  await prisma.contrat.createMany({
    data: [
      { userId: cfa.id, type: 'apprentissage', statut: 'brouillon' },
      { userId: entreprise.id, type: 'professionnalisation', statut: 'signé' },
      { userId: apprenant.id, type: 'apprentissage', statut: 'en attente' },
    ],
  });

  // Conventions de démo
  await prisma.convention.createMany({
    data: [
      { userId: apprenant.id, sujet: 'Stage découverte' },
      { userId: cfa.id, sujet: 'Stage observation' },
    ],
  });

  console.log('Seed terminé !');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect()); 