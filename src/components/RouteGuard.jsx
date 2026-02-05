
// src/components/RouteGuard.jsx
'use client';
import { useUser } from '@/context/UserContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RouteGuard({ children }) {
  const { user, role } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const authCheck = () => {
      const publicPaths = ['/login', '/register', '/'];
      const isPublicPath = publicPaths.includes(pathname);

      const homeRoutes = {
        // ADMIN: '/admin/dashboard',
        OWNER: '/owner/dashboard',
        CLIENT: '/client/booking',
      };

      if (!user && !isPublicPath) {
        setAuthorized(false);
        router.replace('/login');
        return;
      }

      if (user) {
        const isAccessingAdmin = pathname.startsWith('/admin');
        const isAccessingOwner = pathname.startsWith('/owner');
        const isAccessingClient = pathname.startsWith('/client');

        // if (role === 'ADMIN' && (isAccessingOwner || isAccessingClient)) {
        //   router.replace(homeRoutes.ADMIN);
        // }
        if (role === 'OWNER' && (isAccessingAdmin || isAccessingClient)) {
          router.replace(homeRoutes.OWNER);
        } else if (role === 'CLIENT' && (isAccessingAdmin || isAccessingOwner)) {
          router.replace(homeRoutes.CLIENT);
        } else {
          setAuthorized(true);
        }
      } else {
        setAuthorized(true);
      }
    };

    authCheck();
  }, [user, role, pathname, router]);

  return authorized ? <>{children}</> : null;
}
