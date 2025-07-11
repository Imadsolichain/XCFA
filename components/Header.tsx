import React, { useState, useRef, useEffect } from 'react';
import { UserCircleIcon, BuildingOffice2Icon, QuestionMarkCircleIcon, ArrowRightOnRectangleIcon, MoonIcon, SunIcon, ComputerDesktopIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

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
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#2F5FDE] font-semibold shadow hover:bg-[#E9F0FF] transition text-base"
          onClick={() => setOpen((v) => !v)}
        >
          <UserCircleIcon className="h-7 w-7 mr-1" />
          <span className="hidden md:inline">AM</span>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl p-4 flex flex-col gap-2 z-50 border border-[#E9F0FF]">
            <div className="flex gap-2 mb-2">
              <button
                className={`flex-1 flex flex-col items-center gap-1 px-2 py-1 rounded-xl ${theme === 'light' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : 'text-gray-500'}`}
                onClick={() => setTheme('light')}
              >
                <SunIcon className="h-5 w-5" />
              </button>
              <button
                className={`flex-1 flex flex-col items-center gap-1 px-2 py-1 rounded-xl ${theme === 'dark' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : 'text-gray-500'}`}
                onClick={() => setTheme('dark')}
              >
                <MoonIcon className="h-5 w-5" />
              </button>
              <button
                className={`flex-1 flex flex-col items-center gap-1 px-2 py-1 rounded-xl ${theme === 'system' ? 'bg-[#E9F0FF] text-[#2F5FDE]' : 'text-gray-500'}`}
                onClick={() => setTheme('system')}
              >
                <ComputerDesktopIcon className="h-5 w-5" />
              </button>
            </div>
            <a href="/profile" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F4F6F8] text-[#333] transition"><UserCircleIcon className="h-5 w-5" />Mon compte</a>
            <a href="/mon-entreprise" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F4F6F8] text-[#333] transition"><BuildingOffice2Icon className="h-5 w-5" />Mon entreprise</a>
            <a href="/support" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F4F6F8] text-[#333] transition"><QuestionMarkCircleIcon className="h-5 w-5" />Support</a>
            <a href="/privacy" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F4F6F8] text-[#333] transition"><DocumentTextIcon className="h-5 w-5" />Politique de confidentialité</a>
            <a href="/login" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#F4F6F8] text-[#EF4444] transition"><ArrowRightOnRectangleIcon className="h-5 w-5" />Déconnexion</a>
          </div>
        )}
      </div>
    </header>
  );
} 