import React from 'react';
import style from './SideMenu.module.css';
import { useNavigate } from 'react-router';
import { PATH_ROUTE } from 'constants';
import { logoutApi } from 'apis/authApi';
import Menu from './Menu';

const SideMenu = () => {
  const navigete = useNavigate();
  const [selected, setSelected] = React.useState('pageA');

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
      <button className={style.logout} onClick={handleLogout}>
        로그아웃
      </button>
      <Menu setSelected={setSelected} name='pageA' selected={'pageA' === selected} />
      <Menu setSelected={setSelected} name='pageB' selected={'pageB' === selected} />
      <Menu setSelected={setSelected} name='pageC' selected={'pageC' === selected} />
    </div>
  );
};

export default SideMenu;
