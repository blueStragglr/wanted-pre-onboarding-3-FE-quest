import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';

import { PageA } from './pages/PageA';
import { PageB } from './pages/PageB';
import { PageC } from './pages/PageC';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Routes>
        <Route path='/' element={<PageA />} />
        <Route path='/A' element={<PageA />} />
        <Route path='/B' element={<PageB />} />
        <Route path='/C' element={<PageC />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
