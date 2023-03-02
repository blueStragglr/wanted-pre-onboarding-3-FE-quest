import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/">Wanted Pre-onboarding course</Link>
      </h1>
    </header>
  );
};

export default Header;
