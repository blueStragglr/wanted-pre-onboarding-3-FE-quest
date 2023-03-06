import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css';


import Container, { loader as rootLoader }from './components/Container';
import Main from './components/Main';
import CommonPage, { loader as pageLoader } from './components/CommonPage';
import NoMatch from './components/NoMatch';

  

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,      
      loader: rootLoader,
      errorElement: <NoMatch />,
      // action: rootAction,
      children: [
        {
          errorElement: <NoMatch />,
          children: [
            { index: true, element: <Main /> },
            {
              path: "/:pageId",
              element: <CommonPage />,
              loader: pageLoader,
              // action: pageAction,
            },
          ],
        },
      ],
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    
  );
}

export default App;
