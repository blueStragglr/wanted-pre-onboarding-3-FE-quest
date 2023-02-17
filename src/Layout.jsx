import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
