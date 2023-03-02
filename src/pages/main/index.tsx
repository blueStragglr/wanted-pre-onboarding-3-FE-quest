import React from 'react';
import Contents from '../../components/Contents';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import styles from './Main.module.css';
import { ADD_BUTTON_LABEL, LOGIN_LABEL } from '../../constant/constant';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

interface PropsType {
  labelList: string[];
  clickedLabel: string;
  handleClickButton: (value: string) => void;
  handleLabelListButton: () => void;
}

function Main(props: PropsType) {
  const navigate = useNavigate();
  const { labelList, clickedLabel, handleClickButton, handleLabelListButton } = { ...props };
  const handleLoginButton = () => {
    navigate('/login');
  };

  return (
    <div>
      <header className={styles.headerContainer}>
        <Header />
        <Button className={'default'} onClick={handleLabelListButton} label={ADD_BUTTON_LABEL} />
        <Button className={'default'} onClick={handleLoginButton} label={LOGIN_LABEL}></Button>
      </header>
      <article className={styles.layout}>
        <NavBar
          clickedLabel={clickedLabel}
          labelList={labelList}
          handleClickButton={handleClickButton}
        />
        <Contents clickedLabel={clickedLabel} />
      </article>
    </div>
  );
}

export default Main;
