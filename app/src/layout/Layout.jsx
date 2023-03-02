import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
