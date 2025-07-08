import { ClerkProvider } from '@clerk/nextjs';
import '../globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
} 