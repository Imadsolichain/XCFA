import React from 'react';
import { UserButton } from '@clerk/nextjs';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="w-full h-20 bg-gradient-to-r from-[#E9F0FF] via-white to-[#F4F6F8] border-b flex items-center justify-between px-10 shadow-md rounded-b-2xl">
      <div className="font-extrabold text-2xl text-[#2F5FDE] tracking-tight drop-shadow-sm">{title}</div>
      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/login" />
      </div>
    </header>
  );
} 