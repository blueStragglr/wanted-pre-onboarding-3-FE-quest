import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Main from './pages/Main';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}  >
        <Route index element={<Main />} />
        <Route path='/pageA' element={<PageA />} />
        <Route path='/pageB' element={<PageB />} />
        <Route path='/pageC' element={<PageC />} />
      </Route>
    </Routes>
  );
}

export default App;
