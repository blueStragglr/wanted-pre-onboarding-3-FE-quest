import React, { useState } from 'react';
import './App.css';
import Main from './pages/main';

function App() {
  const [labelList, setLabelList] = useState<string[]>(['A', 'B', 'C']);
  const [clickedLabel, setClickedLabel] = useState<string>('A');
  const handleClickButton = (value: string) => {
    setClickedLabel(value);
  };
  return (
    <div className="App">
      <Main
        labelList={labelList}
        clickedLabel={clickedLabel}
        handleClickButton={handleClickButton}
      />
    </div>
  );
}

export default App;
