import React from 'react';
import PageButton from './PageButton';
import styles from './NavBar.module.css';
interface NavType {
  labelList: string[];
  handleClickButton: (value: string) => void;
}

function NavBar(props: NavType) {
  const { labelList, handleClickButton } = { ...props };
  return (
    <nav className={styles.layout}>
      {labelList.map((item: string, index: number) => (
        <PageButton label={item} key={index} handleClickButton={handleClickButton} />
      ))}
    </nav>
  );
}

export default NavBar;
