import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/pageA" element={<PageA />} />
            <Route path="/pageB" element={<PageB />} />
            <Route path="/pageC" element={<PageC />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
