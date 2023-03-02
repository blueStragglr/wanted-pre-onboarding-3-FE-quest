import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './components/Home';
import Edit from './components/Edit';
import Create from './components/Create';
import Auth from './components/Auth';

import '../src/assets/style/reset.css';
import '../src/assets/style/main.css';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home />},
      { path: '/login', element: <Auth />},
      { path: '/create', element: <Create />},
      { path: '/edit', element: <Edit />},
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
