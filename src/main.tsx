import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import Main from './pages/Main/Main';
import PageA from './pages/PageA/PageA';
import PageB from './pages/PageB/PageB';
import PageC from './pages/PageC/PageC';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Main /> },
      { path: 'a', element: <PageA /> },
      { path: 'b', element: <PageB /> },
      { path: 'c', element: <PageC /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
