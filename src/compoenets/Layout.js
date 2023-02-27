import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import SidebarItem from './SidebarItem';

import styles from './Layout.module.css';

import PageA from '../pages/PageA';
import PageB from '../pages/PageB';
import PageC from '../pages/PageC';



function Layout({children,activeMenu}) {
  return (
    <BrowserRouter>
        <div className={styles.container}>
          <Header />
          <div className={styles.layout}>
           
            <Menu activeMenu={activeMenu}/>

            <div className={styles.contents}>{children}
              <Routes>
                <Route path="/PageA" element={<PageA/>}></Route>
              </Routes>
              <Routes>
                <Route path="/PageB" element={<PageB/>}></Route>
              </Routes>
              <Routes>
                <Route path="/PageC" element={<PageC/>}></Route>
              </Routes>     
            </div>

          </div>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default Layout