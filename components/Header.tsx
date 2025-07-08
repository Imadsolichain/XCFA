import { UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="font-semibold text-lg">Tableau de bord</div>
      <UserButton afterSignOutUrl="/login" />
    </header>
  );
} 