import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './routes/common/error-page';
import Page1 from './routes/page1';
import Page2 from './routes/page2';
import Page3 from './routes/page3';
import Layout from './routes/common/layout';
import Login from './routes/login/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'page1',
        element: <Page1 />,
      },
      {
        path: 'page2',
        element: <Page2 />,
      },
      {
        path: 'page3',
        element: <Page3 />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
