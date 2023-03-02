import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import Main from './pages/Main';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="pageA" element={<PageA />} />
          <Route path="pageB" element={<PageB />} />
          <Route path="pageC" element={<PageC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
