import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';
import styles from './Header.module.css';

function Header() {
  const auth = useAuth();

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        <span>Wanted Pre-onboarding course</span>
      </Link>
      {auth.user ? (
        <div className={styles.userInfo}>
          <span className={styles.userName}>{auth.user.name}</span>
          <button className={styles.signButton} onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      ) : (
        <Link className={styles.signButton} to="/login">
          Sign in
        </Link>
      )}
    </header>
  );
}

export default Header;
