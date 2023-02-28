import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import styles from './Root.module.css'

export default function Root() {
    return (
        <div className={styles.root}>
            <div className={styles.navbar}>
                <NavBar />
            </div>
            <div className={styles.container}>
                <div className={styles.sidebar}><SideBar /></div>
                <div className={styles.outlet}><Outlet /></div>
            </div>
        </div>
    );
}

