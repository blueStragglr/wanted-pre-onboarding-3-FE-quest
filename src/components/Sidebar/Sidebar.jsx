import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link to={'a'}>Page A</Link>
      </li>
      <li>
        <Link to={'b'}>Page B</Link>
      </li>
      <li>
        <Link to={'c'}>Page C</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
