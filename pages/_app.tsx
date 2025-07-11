import '../globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </>
  );
} 