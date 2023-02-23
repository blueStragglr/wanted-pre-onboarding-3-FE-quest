import React from 'react';
import { Outlet } from 'react-router-dom';
import App from '../App';
import Header from './Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <App>
        <Outlet />
      </App>
    </div>
  );
};

export default Layout;
