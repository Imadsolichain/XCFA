import { createMocks } from 'node-mocks-http';
import handlerPost from '../pages/api/contrats/index';
import handlerGet from '../pages/api/contrats/[id]';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('API Contrats', () => {
  let contratId = '';
  let userId = '';

  beforeAll(async () => {
    // Crée un utilisateur de test
    const user = await prisma.user.create({
      data: {
        email: 'test-user@example.com',
        firstname: 'Test',
        lastname: 'User',
        role: 'CFA_ADMIN',
      },
    });
    userId = user.id;
  });

  afterAll(async () => {
    // Nettoie la base
    await prisma.contrat.deleteMany({ where: { userId } });
    await prisma.user.delete({ where: { id: userId } });
    await prisma.$disconnect();
  });

  it('crée un contrat', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { userId, type: 'apprentissage', statut: 'brouillon' },
    });
    await handlerPost(req as unknown as import('next').NextApiRequest, res as unknown as import('next').NextApiResponse);
    expect(res._getStatusCode()).toBe(201);
    const data = JSON.parse(res._getData());
    expect(data.type).toBe('apprentissage');
    contratId = data.id;
  });

  it('récupère un contrat', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: contratId },
    });
    await handlerGet(req as unknown as import('next').NextApiRequest, res as unknown as import('next').NextApiResponse);
    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.id).toBe(contratId);
  });
}); 