import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.logoText}>
        <span onClick={() => navigate('/')}>Wanted Pre-onboarding course</span>
      </h1>
      <button className={styles.loginButton} onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  );
};
