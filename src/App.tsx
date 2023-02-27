import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PageA />}></Route>
            <Route path="/pageB" element={<PageB />}></Route>
            <Route path="/pageC" element={<PageC />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
