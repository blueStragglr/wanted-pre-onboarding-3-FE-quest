import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import Login from './pages/Login';
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate replace to="/page/a" />} />
        <Route path="/page/a" element={<PageA />}></Route>
        <Route path="/page/b" element={<PageB />}></Route>
        <Route path="/page/c" element={<PageC />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Navigate replace to="/page/a" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
