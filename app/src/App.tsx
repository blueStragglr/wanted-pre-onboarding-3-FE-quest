import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/common/Layout';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PageA />} />
          <Route path="/page_a" element={<PageA />} />
          <Route path="/page_b" element={<PageB />} />
          <Route path="/page_c" element={<PageC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
