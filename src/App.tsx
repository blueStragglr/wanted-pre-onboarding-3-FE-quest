import React from 'react';
import { Toaster } from 'react-hot-toast';
import RootRouter from './route/Router';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <RootRouter />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
