import { PropsWithChildren } from 'react';
import styles from './PageLayout.module.css';

function PageLayout({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}

export default PageLayout;
