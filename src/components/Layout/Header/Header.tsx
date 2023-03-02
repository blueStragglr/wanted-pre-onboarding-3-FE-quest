import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logoText}>Wanted Pre-onboarding course</h1>
      <button className={styles.loginButton}>Login</button>
    </div>
  );
};
