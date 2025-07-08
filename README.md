# XCFA - Socle technique

## Stack
- Next.js (TypeScript)
- Tailwind CSS
- Prisma ORM
- PostgreSQL (Docker ou local)
- Clerk (authentification)
- Jest (tests d'intégration)

## Fonctionnalités principales
- Authentification sécurisée (Clerk)
- Gestion des rôles (CFA, entreprise, apprenant, etc.)
- Modèles métiers : User, CFA, Entreprise, Apprenant, Contrat, Convention, Evenement (logs), Notification
- API RESTful pour tous les objets métiers
- Pages protégées par rôle (dashboard, contrats, conventions, etc.)
- Layout global réutilisable (Sidebar, Header)
- Mock d'envoi d'e-mail et de signature électronique (Sendinblue/SendGrid, Yousign)
- Tests d'intégration Jest (API)
- Page RGPD / Politique de confidentialité

## Installation
1. Clone le repo et va dans le dossier :
   ```bash
   cd my-app
   ```
2. Installe les dépendances :
   ```bash
   npm install
   ```
3. Configure le fichier `.env` :
   ```env
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/xcfa
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   ```
4. (Optionnel) Lance PostgreSQL avec Docker :
   ```bash
   docker-compose up -d
   ```
5. Applique les migrations Prisma :
   ```bash
   npx prisma migrate dev --name init
   ```
6. Démarre le serveur :
   ```bash
   npm run dev
   ```
7. Lance les tests :
   ```bash
   npx jest
   ```

## Structure des dossiers
- `/pages` : pages Next.js (publiques et privées)
- `/components` : UI réutilisable (Layout, Sidebar, Header)
- `/prisma` : schéma et migrations Prisma
- `/lib` : services (e-mail, signature, etc.)
- `/__tests__` : tests d'intégration Jest

## RGPD
- Page `/privacy` accessible à tous
- Logs d'activité via le modèle Evenement
- Consentement à ajouter à l'inscription si besoin

## Pour aller plus loin
- Ajouter des tests front-end (Playwright, Cypress)
- Déployer sur Vercel, Render ou autre
- Intégrer un vrai provider e-mail et signature
- Ajouter la gestion fine des droits par rôle

---

Développé avec ❤️ pour le MVP XCFA
