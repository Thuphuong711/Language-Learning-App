'use client';

import { SessionProvider } from 'next-auth/react';

// For the app to access each provider's login session 
export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
