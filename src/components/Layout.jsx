import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar pageList={['page1', 'page2', 'page3', 'page4', 'page5']} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
