import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.css'

export default function SideBar() {
    return (
        <ul className={styles.ul}>
            <li><Link to='/a' className={styles.link}>Page A</Link></li>
            <li><Link to='/b' className={styles.link}>Page B</Link></li>
            <li><Link to='/c' className={styles.link}>Page C</Link></li>
            <li><Link to='/d' className={styles.link}>Page D</Link></li>
            <li><Link to='/e' className={styles.link}>Page E</Link></li>
        </ul>
    );
}

