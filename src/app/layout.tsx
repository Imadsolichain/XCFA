import '../../globals.css';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Toaster position="top-right" />
        <main className="flex items-center justify-center p-6 sm:p-10">{children}</main>
      </body>
    </html>
  );
}
