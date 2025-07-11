import React, { useState, useRef, useEffect } from 'react';
import { UserCircleIcon, BuildingOffice2Icon, QuestionMarkCircleIcon, ArrowRightOnRectangleIcon, MoonIcon, SunIcon, ComputerDesktopIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <header className="w-full h-20 bg-gradient-to-r from-[#E9F0FF] via-white to-[#F4F6F8] border-b flex items-center justify-between px-10 shadow-md">
      <div className="font-extrabold text-2xl text-[#2F5FDE] tracking-tight drop-shadow-sm">{title}</div>
      <div className="relative" ref={menuRef}>
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" appearance={{ elements: { avatarBox: 'ring-2 ring-[#2F5FDE]', userButtonPopoverCard: 'rounded-2xl shadow-xl', userButtonPopoverActionButton: 'rounded-xl', userButtonPopoverActionButtonIcon: 'text-[#2F5FDE]', userButtonPopoverFooter: 'text-xs text-gray-400' }, variables: { colorPrimary: '#2F5FDE' } }} />
        </SignedIn>
        <SignedOut>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#2F5FDE] font-semibold shadow hover:bg-[#E9F0FF] transition text-base"
            onClick={() => window.location.href = '/sign-in'}
          >
            Se connecter
          </button>
        </SignedOut>
      </div>
    </header>
  );
} 