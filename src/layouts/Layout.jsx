import { React } from 'react';
import { Outlet } from 'react-router-dom';
import GNB from './GNB';
import SNB from './SNB';

const Layout = () => {
  return (
    <>
      <GNB />
      <div className="container">
        <SNB />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
