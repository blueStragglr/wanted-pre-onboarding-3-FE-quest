import { ReactNode } from 'react';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import styles from './Layout.module.scss';

type LayoutType = {
  children: ReactNode | ReactNode[];
};

export const Layout = ({ children }: LayoutType) => {
  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};
