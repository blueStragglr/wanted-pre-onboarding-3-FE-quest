import { Outlet } from 'react-router-dom';
import Header from './Header';
import PageLayout from './PageLayout';
import SideBar from './SideBar';
import styles from './RootLayout.module.css';

function RootLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <PageLayout>
          <Outlet />
        </PageLayout>
      </main>
    </>
  );
}

export default RootLayout;
