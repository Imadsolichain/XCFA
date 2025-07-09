import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => (
  <div>
    <h2>{title}</h2>
    {Array.isArray(children) ? children.map((child, i) => (typeof child === 'object' && child !== null ? child : <span key={i}>{String(child)}</span>)) : children}
  </div>
);

export default Layout;
