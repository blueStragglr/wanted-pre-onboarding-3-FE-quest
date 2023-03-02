import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import GreetingPage from './pages/GreetingPage';
import InitialPage from './pages/InitialPage';
import Layout from './layout';
import LoginPage from './pages/LoginPage';
import { worker } from './mocks/browser';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout children={<InitialPage />} />,
    errorElement: <Layout children={<ErrorPage />} />,
  },
  {
    path: '/page/:id',
    element: <Layout children={<GreetingPage />} />,
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
    title: 'Page 1',
    url: '/page/1',
  },
  {
    title: 'Page 2',
    url: '/page/2',
  },
  {
    title: 'Page 3',
    url: '/page/3',
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
