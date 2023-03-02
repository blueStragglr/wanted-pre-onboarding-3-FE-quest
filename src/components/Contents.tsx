import React from 'react';
import { ARTICLE_LABEL, EXCLAMATION_MARK } from '../constant/constant';
import styles from './Contents.module.css';

interface contentsType {
  clickedLabel: string;
}
function Contents(props: contentsType) {
  const { clickedLabel } = { ...props };
  return (
    <p className={styles.textContainer}>{`${ARTICLE_LABEL} ${clickedLabel} ${EXCLAMATION_MARK}`}</p>
  );
}

export default Contents;
