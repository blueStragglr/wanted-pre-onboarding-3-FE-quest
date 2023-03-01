import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
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
