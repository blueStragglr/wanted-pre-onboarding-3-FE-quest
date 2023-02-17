import { createBrowserRouter } from 'react-router-dom';
import Auth from '@/pages/auth';
import Home from '@/pages/home';
import Community from '@/pages/community';
import ErrorPage from '@/pages/error-page';
import Login from '@/pages/auth/login';
import Join from '@/pages/auth/join';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'community',
        element: <Community />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      {
        path: 'login',
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'join',
        element: <Join />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
