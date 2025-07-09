import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => (
  <div className="flex min-h-screen bg-[#F4F6F8]">
    <Sidebar />
    <div className="flex-1 flex flex-col ml-64">
      <Header title={title} />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
