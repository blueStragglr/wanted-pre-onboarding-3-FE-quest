import React from 'react';
import Contents from '../../components/Contents';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import styles from './Main.module.css';

interface PropsType {
  labelList: string[];
  clickedLabel: string;
  handleClickButton: (value: string) => void;
}

function Main(props: PropsType) {
  const { labelList, clickedLabel, handleClickButton } = { ...props };
  return (
    <div>
      <Header />
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
