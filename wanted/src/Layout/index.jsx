import React from 'react';
import $ from './layout.module.scss'
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className={$.wrapper}>
        <SideBar />
        <div className={$.contents}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;