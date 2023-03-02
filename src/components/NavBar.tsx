import React, { useState } from 'react';
import PageButton from './PageButton';
import styles from './NavBar.module.css';
interface NavType {
  labelList: string[];
  handleClickButton: (value: string) => void;
  clickedLabel: string;
}

function NavBar(props: NavType) {
  const { labelList, handleClickButton, clickedLabel } = { ...props };
  const [isClicked, setIsClicked] = useState();
  return (
    <nav className={styles.layout}>
      {labelList.map((item: string, index: number) => (
        <PageButton
          isClicked={clickedLabel === item ? true : false}
          label={item}
          key={index}
          handleClickButton={handleClickButton}
        />
      ))}
    </nav>
  );
}

export default NavBar;
