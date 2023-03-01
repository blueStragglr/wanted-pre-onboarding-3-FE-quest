import React, { useState } from 'react';
import './App.css';
import {
  MAX_VALUE,
  ADD_ALERT_MESSAGE,
  ASCII_VALUE,
  INIT_ARRAY,
  INIT_SELECTED,
} from './constant/constant';
import Main from './pages/main';

function App() {
  const [labelList, setLabelList] = useState(INIT_ARRAY);
  const [clickedLabel, setClickedLabel] = useState<string>(INIT_SELECTED);

  const handleClickButton = (value: string) => {
    setClickedLabel(value);
  };
  const handleLabelListButton = () => {
    const item = String.fromCharCode(labelList.length + ASCII_VALUE);
    if (item <= MAX_VALUE) {
      const newList = [...labelList];
      newList.push(item);
      setLabelList([...newList]);
    }
    if (item > MAX_VALUE) {
      alert(ADD_ALERT_MESSAGE);
    }
  };
  return (
    <div className="App">
      <Main
        labelList={labelList}
        handleLabelListButton={handleLabelListButton}
        clickedLabel={clickedLabel}
        handleClickButton={handleClickButton}
      />
    </div>
  );
}

export default App;
