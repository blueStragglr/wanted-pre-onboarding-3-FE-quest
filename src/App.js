import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Template from './components/Template';
import GlobalStyle from './styles/GlobalStyle';
import PageA from './pages/PageA';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<PageA />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
