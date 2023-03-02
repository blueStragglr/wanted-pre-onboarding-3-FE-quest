import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import InitialPage from './pages/InitialPage';
import Layout from './layout';
import LoginPage from './pages/LoginPage';
import { worker } from './mocks/browser';
import './index.css';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout children={<InitialPage />} />,
    errorElement: <Layout children={<ErrorPage />} />,
  },
  {
    path: '/pageA',
    element: <Layout children={<PageA />} />,
  },
  {
    path: '/pageB',
    element: <Layout children={<PageB />} />,
  },
  {
    path: '/pageC',
    element: <Layout children={<PageC />} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export const routesList = [
  {
    title: 'login',
    url: '/login',
  },
  {
    title: 'Page A',
    url: '/pageA',
  },
  {
    title: 'Page B',
    url: '/pageB',
  },
  {
    title: 'Page C',
    url: '/pageC',
  },
];

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
