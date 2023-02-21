import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="container-full">
      <Header />
      <Sidebar />
      <div className="ml-48">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
