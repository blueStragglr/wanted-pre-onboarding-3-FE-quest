import React from 'react';
import style from './Root.module.css';

import Header from 'components/layout/Header';
import SideMenu from 'components/layout/SideMenu';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className={ style.container }>
      <Header />
      <div className={ style.mainSection }>
        <SideMenu />
        <div className={ style.content }>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
