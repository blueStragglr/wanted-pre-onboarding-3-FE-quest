import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li className={styles.menuItem}>
            <Link to="/a">Page A</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/b">Page B</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="c">Page C</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
