import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  // 제목을 클릭하면 main 페이지로 이동하면서 home 컴포넌트가 노출
  
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}><Link to='/'>Wanted Pre-onboarding Course</Link></h1>
    </nav>
  );
}

