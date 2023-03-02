import React, { useState } from 'react';
import { NAV_PAGE_LABEL } from '../constant/constant';
import styles from './PageButton.module.css';

interface buttonType {
  label: string;
  handleClickButton: (value: string) => void;
  isClicked: boolean;
}
function PageButton(props: buttonType) {
  const { label, handleClickButton, isClicked } = { ...props };

  const handleClick = () => {
    handleClickButton(label);
  };
  return (
    <button
      className={`${styles.buttonLayout} ${isClicked && styles.clicked}`}
      onClick={handleClick}
    >{`${NAV_PAGE_LABEL} ${label}`}</button>
  );
}

export default PageButton;
