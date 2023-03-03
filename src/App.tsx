import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
