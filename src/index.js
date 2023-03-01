import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PageA /> },
      { path: 'page-a', element: <PageA /> },
      { path: 'page-b', element: <PageB /> },
      { path: 'page-c', element: <PageC /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
