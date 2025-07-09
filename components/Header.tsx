import React from 'react';
import { UserButton } from '@clerk/nextjs';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
      <div className="font-semibold text-xl text-[#333333]">{title}</div>
      <UserButton afterSignOutUrl="/login" />
    </header>
  );
} 