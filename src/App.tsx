import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageA } from './pages/PageA';
import { PageB } from './pages/PageB';
import { PageC } from './pages/PageC';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageA />} />
      <Route path='/A' element={<PageA />} />
      <Route path='/B' element={<PageB />} />
      <Route path='/C' element={<PageC />} />
    </Routes>
  );
}

export default App;
