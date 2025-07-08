import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/dashboard',
    '/contrats/nouveau',
    // Ajoute d'autres routes privées ici si besoin
  ],
}; 