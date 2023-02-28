import React from 'react';
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <nav>
            <img src="https://theme.zdassets.com/theme_assets/9309779/4f2fb72a20c8e2ee37a305ef38ef1d144774a8df.png" alt="" />
            <div className={styles.title}>Wanted Pre-onboarding course</div>
            <div className={styles.login}>Login</div>
        </nav>
    );
}

