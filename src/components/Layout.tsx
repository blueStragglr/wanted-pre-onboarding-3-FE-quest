import Aside from './Aside';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Aside />
        <main className='m-auto flex-1 text-center'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
