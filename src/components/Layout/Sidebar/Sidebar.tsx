import { useState } from 'react';
import className from 'classnames';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const [clickedTabId, setClickedTabId] = useState('0');

  const handleActiveTab = (e: React.MouseEvent<HTMLLIElement>) => {
    setClickedTabId(e.currentTarget.id);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menuList}>
        <li
          id='0'
          className={className(
            styles.menuListItem,
            clickedTabId === '0' && styles.clicked
          )}
          onClick={handleActiveTab}
        >
          <Link to='/page-a'>Page A</Link>
        </li>
        <li
          id='1'
          className={className(
            styles.menuListItem,
            clickedTabId === '1' && styles.clicked
          )}
          onClick={handleActiveTab}
        >
          <Link to='/page-b'>Page B</Link>
        </li>
        <li
          id='2'
          className={className(
            styles.menuListItem,
            clickedTabId === '2' && styles.clicked
          )}
          onClick={handleActiveTab}
        >
          <Link to='/page-c'>Page C</Link>
        </li>
      </ul>
    </div>
  );
};
