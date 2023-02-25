import React from 'react';
import './App.css';
import Header from 'components/layout/Header';
import SideMenu from 'components/layout/SideMenu';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='mainSection'>
        <SideMenu />
        <div className='content'>
          <h1>This is Page A!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
