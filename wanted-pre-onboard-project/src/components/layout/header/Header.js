import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <h2>Wanted Pre-onboarding course</h2>
      <div className={styles.signBtn}>
        <Link to="/signin">
          <button className={styles.signIn}>Sign In</button>
        </Link>
      </div>
    </header>
  )
}

export default Header