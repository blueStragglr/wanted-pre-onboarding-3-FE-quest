import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import styles from './Root.module.css'

export default function Root() {
    return (
        <div className={styles.root}>
            <div className={styles.navbar}>
                <NavBar />
            </div>
            <div>
                <SideBar />
            </div>
        </div>
    );
}

