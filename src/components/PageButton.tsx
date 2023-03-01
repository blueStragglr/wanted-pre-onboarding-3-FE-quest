import React from 'react';
import { NAV_PAGE_LABEL } from '../constant/constant';
import styles from './PageButton.module.css';

interface buttonType {
  label: string;
}
function PageButton(props: buttonType) {
  const { label } = { ...props };
  return <button className={styles.buttonLayout}>{`${NAV_PAGE_LABEL} ${label}`}</button>;
}

export default PageButton;
