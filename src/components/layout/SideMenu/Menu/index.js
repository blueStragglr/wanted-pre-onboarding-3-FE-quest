import React from 'react';
import style from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import { PATH_ROUTE } from 'constants';

const Menu = ({ name, selected, setSelected }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PATH_ROUTE[name]);
    setSelected(name);
  };

  return (
    <div className={`${style.container} ${selected && style.selected}`} onClick={handleClick}>
      {' '}
      {name}
    </div>
  );
};

export default Menu;
