import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function withRole<P>(Component: React.ComponentType<P>, allowedRoles: string[]) {
  return function RoleProtected(props: P) {
    const { user, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (isLoaded && user) {
        const role = user.publicMetadata.role as string;
        if (!allowedRoles.includes(role)) {
          router.replace('/dashboard'); // Redirige si rôle non autorisé
        }
      }
    }, [isLoaded, user, router]);

    if (!isLoaded || !user) return null;
    const role = user.publicMetadata.role as string;
    if (!allowedRoles.includes(role)) return null;
    return <Component {...props} />;
  };
} 