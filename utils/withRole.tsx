import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function withRole<P>(Component: React.ComponentType<P>, allowedRoles: string[]) {
  return function RoleProtected(props: P) {
    const router = useRouter();

    useEffect(() => {
      // This part of the logic needs to be adapted if Clerk is removed.
      // For now, it will always return null as there's no user object.
      // The original code had `user` and `isLoaded` from Clerk, which are removed.
      // This function will effectively disable role protection if Clerk is not used.
      // If Clerk is still intended to be used, this logic needs to be re-evaluated.
      // For now, returning null as there's no user object.
      return null;
    }, [router]); // Removed user and isLoaded from dependencies as they are no longer imported.

    // The original code had a check for `isLoaded` and `user` here.
    // Since `user` and `isLoaded` are removed, this block will always return null.
    // The `role` variable is also removed as `user` is not available.
    // The `allowedRoles` check is also removed as `role` is not available.
    return <Component {...props} />;
  };
} 