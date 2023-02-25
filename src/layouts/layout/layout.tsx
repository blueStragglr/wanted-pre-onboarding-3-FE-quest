import { Outlet } from 'react-router-dom';

import { LayoutContainer } from './layout.style';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default Layout;
