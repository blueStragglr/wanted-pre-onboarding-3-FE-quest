import React from 'react';
import PageButton from './PageButton';
import styles from './NavBar.module.css';
interface NavType {
  labelList: string[];
}

function NavBar(props: NavType) {
  const { labelList } = { ...props };
  return (
    <nav className={styles.layout}>
      {labelList.map((item: string, index: number) => (
        <PageButton label={item} key={index} />
      ))}
    </nav>
  );
}

export default NavBar;
