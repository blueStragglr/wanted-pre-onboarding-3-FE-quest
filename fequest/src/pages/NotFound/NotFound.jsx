import React from 'react';
import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <div className={styles.title}>
            <div className={styles.text}>
                Sorry! Page Not Found 😥
            </div>
        </div>
    );
}

