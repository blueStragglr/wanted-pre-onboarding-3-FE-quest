import React from 'react'
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import styles from './Layout.module.css';


function Layout({children}) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.layout}>
        <Menu />
        <div className={styles.contents}>{children}</div>
      </div>
        <Footer/>
    </div>
  );
}

export default Layout