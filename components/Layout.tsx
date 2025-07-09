import React from 'react';

type LayoutProps = {
  children: any;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Layout;
