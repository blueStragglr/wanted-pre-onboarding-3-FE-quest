import React from 'react';
import style from './SideMenu.module.css';

const SideMenu = () => {
  return (
    <div className={style.container}>
      <a>
        <h2>Page A</h2>
      </a>
      <a>
        <h2>Page B</h2>
      </a>
      <a>
        <h2>Page C</h2>
      </a>
    </div>
  );
};

export default SideMenu;
