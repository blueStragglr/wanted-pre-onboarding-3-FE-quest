import React from 'react';
import styles from './Login.module.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src="https://theme.zdassets.com/theme_assets/9309779/4f2fb72a20c8e2ee37a305ef38ef1d144774a8df.png" alt="" />
            <form action="" className={styles.form}>
                <p>Email</p>
                <input type="email" name="" id="email" placeholder='  email@gmail.com' />
                <p>Password</p>
                <input type="password" name="" id="password" placeholder='  password' />
                <div className={styles.btns}>
                    <button>Login</button>
                    <Link to='/'><button>Main</button></Link>
                </div>
            </form>    
        </div>
    );
}

