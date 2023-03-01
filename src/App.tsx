import { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;
