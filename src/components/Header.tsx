import React from 'react';
import { HEADER_LABEL } from '../constant/constant';
import styles from './Header.module.css';

function Header() {
  return <header className={styles.headerLabel}>{HEADER_LABEL}</header>;
}

export default Header;
