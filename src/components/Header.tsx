import React from 'react';
import { HEADER_LABEL } from '../constant/constant';
import styles from './Header.module.css';

function Header() {
  return <div className={styles.headerLabel}>{HEADER_LABEL}</div>;
}

export default Header;
