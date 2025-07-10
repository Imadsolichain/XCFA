import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import NavBar from './NavBar';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="flex min-h-screen bg-[#F4F6F8]">
    <NavBar />
    <Sidebar />
    <div className="flex-1 flex flex-col ml-64 pt-24">
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
