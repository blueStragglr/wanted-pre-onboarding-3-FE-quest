import React from 'react';
import { NAV_PAGE_LABEL } from '../constant/constant';
import styles from './PageButton.module.css';

interface buttonType {
  label: string;
  handleClickButton: (value: string) => void;
}
function PageButton(props: buttonType) {
  const { label, handleClickButton } = { ...props };
  return (
    <button
      className={styles.buttonLayout}
      onClick={() => {
        handleClickButton(label);
      }}
    >{`${NAV_PAGE_LABEL} ${label}`}</button>
  );
}

export default PageButton;
