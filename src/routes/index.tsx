import Layout from '@/components/atoms/Layout';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectRoute } from '@/components/ProtectRoute';
import Home from '@/pages/home';
import Community from '@/pages/community';
import ErrorPage from '@/pages/error-page';
import Login from '@/pages/auth/login';
import Join from '@/pages/auth/join';
import { PATH } from '@/constants';

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <ProtectRoute />
      </Layout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: PATH.MAIN,
        element: <Home />,
      },
      {
        path: PATH.COMMUNITY,
        element: <Community />,
      },
    ],
  },
  {
    path: PATH.AUTH,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login /> },
      {
        path: PATH.LOGIN,
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: PATH.JOIN,
        element: <Join />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
