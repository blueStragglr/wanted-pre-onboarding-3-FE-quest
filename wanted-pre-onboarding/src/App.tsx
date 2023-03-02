import React from 'react';
import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar';
import Contents from './Layout/Contents';

function App() {
  return (
    <>
        <Header />
        <div className='flex flex-row'>
          <Sidebar />
          <Contents />
        </div>
    </>
  );
}

export default App;
