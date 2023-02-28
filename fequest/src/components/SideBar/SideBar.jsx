import React from 'react';
import styles from './SideBar.module.css'

export default function SideBar() {
    return (
        <ul className={styles.ul}>
            <li>Page A</li>
            <li>Page B</li>
            <li>Page C</li>
            <li>Page D</li>
            <li>Page E</li>
        </ul>
    );
}

