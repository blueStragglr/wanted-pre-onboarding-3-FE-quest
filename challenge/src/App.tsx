import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import SideBar from './components/SideBar';
import PageA from './pages/main/PageA';
import './App.css';
import PageC from './pages/main/PageC';
import PageB from './pages/main/PageB';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='wrap'>
        <SideBar/>
        <Routes>
          <Route path='/page-a' element={<PageA/>}/>
          <Route path='/page-b' element={<PageB/>}/>
          <Route path='/page-c' element={<PageC/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
