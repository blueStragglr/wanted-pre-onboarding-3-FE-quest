import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
