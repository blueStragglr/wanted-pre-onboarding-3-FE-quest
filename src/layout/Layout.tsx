import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './Header';
import NavBar from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  if (location.pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <Header></Header>
      <NavBar></NavBar>
      <main className="ml-56 pt-14 flex justify-center items-center box-border min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
