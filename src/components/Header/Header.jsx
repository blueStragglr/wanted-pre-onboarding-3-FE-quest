import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>
        <Link to={''}>Wanted Pre-onboarding course</Link>
      </h1>
    </div>
  );
};

export default Header;
