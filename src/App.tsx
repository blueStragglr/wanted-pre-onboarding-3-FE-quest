import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Contents from './components/Contents';

function App() {
  const [labelList, setLabelList] = useState<string[]>(['A', 'B', 'C']);
  const [clickedLabel, setClickedLabel] = useState<string>('A');
  const handleClickButton = (value: string) => {
    setClickedLabel(value);
  };
  return (
    <div className="App">
      <Header />
      <NavBar labelList={labelList} handleClickButton={handleClickButton} />
      <Contents clickedLabel={clickedLabel} />
    </div>
  );
}

export default App;
