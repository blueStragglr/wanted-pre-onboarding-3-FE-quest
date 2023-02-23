import { NavLink } from 'react-router-dom';
import { pages } from '../App';
import styles from './SideBar.module.css';

function SideBar() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <ul className={styles.list}>
          {pages.map((page) => (
            <li key={page.path} className={styles.item}>
              <NavLink
                to={page.path}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default SideBar;
