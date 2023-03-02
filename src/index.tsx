import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from 'routes/root';
import Page from 'routes/page';
import Login from 'routes/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: ':page',
        element: <Page />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
