import { createBrowserRouter } from 'react-router-dom';
import Authorization from './layout/Authorization';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

interface RouterItem {
  path: string;
  element: React.ReactNode;
  withAuthorization: boolean;
  label: string;
}

export const RouterInfo: RouterItem[] = [
  {
    path: '/',
    element: <Home />,
    withAuthorization: false,
    label: '홈',
  },
  {
    path: '/page-a',
    element: <PageA />,
    withAuthorization: true,
    label: '페이지 A',
  },
  {
    path: '/page-b',
    element: <PageB />,
    withAuthorization: true,
    label: '페이지 B',
  },
  {
    path: '/page-c',
    element: <PageC />,
    withAuthorization: true,
    label: '페이지 C',
  },
  {
    path: '/login',
    element: <Login />,
    withAuthorization: false,
    label: '로그인 페이지',
  },
];

export const Router = createBrowserRouter(
  RouterInfo.map((routerInfo: RouterItem) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: <Authorization>{routerInfo.element}</Authorization>,
        }
      : {
          path: routerInfo.path,
          element: <Layout>{routerInfo.element}</Layout>,
        };
  })
);
