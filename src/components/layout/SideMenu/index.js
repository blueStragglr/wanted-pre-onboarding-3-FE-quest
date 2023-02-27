import React from 'react';
import style from './SideMenu.module.css';
import { useNavigate } from 'react-router';
import { PATH_ROUTE } from 'constants';
import { logoutApi } from 'apis/authApi';

const SideMenu = () => {
  const navigete = useNavigate();

  const handleMenu = (path) => {
    navigete(path);
  };

  const handleLogout = () => {
    try {
      logoutApi();
      navigete(PATH_ROUTE.login);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={style.container}>
      <button className={style.menuTitle} onClick={handleLogout}>
        로그아웃
      </button>
      <div className={style.menuTitle} onClick={() => handleMenu(PATH_ROUTE.pagea)}>
        Page A
      </div>
      <div className={style.menuTitle} onClick={() => handleMenu(PATH_ROUTE.pageb)}>
        Page B
      </div>
      <div className={style.menuTitle} onClick={() => handleMenu(PATH_ROUTE.pagec)}>
        Page C
      </div>
    </div>
  );
};

export default SideMenu;
