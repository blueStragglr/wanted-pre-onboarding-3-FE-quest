import { PATH_ROUTE } from 'constants';
import { createBrowserRouter } from 'react-router-dom';
import { authLoader, rootLoader } from './loaders';
import { lazy } from 'react';

const Root = lazy(() => import('pages/Root'));
const Login = lazy(() => import('pages/Login'));
const Join = lazy(() => import('pages/Join'));
const PageA = lazy(() => import('pages/PageA'));
const PageB = lazy(() => import('pages/PageB'));
const PageC = lazy(() => import('pages/PageC'));
const Error = lazy(() => import('pages/Error'));

const routes = [
  {
    path: PATH_ROUTE.root,
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    children: [
      {
        path: PATH_ROUTE.pagea,
        element: <PageA />,
      },
      {
        path: PATH_ROUTE.pageb,
        element: <PageB />,
      },
      {
        path: PATH_ROUTE.pagec,
        element: <PageC />,
      },
    ],
  },
  {
    path: PATH_ROUTE.login,
    element: <Login />,
    errorElement: <Error />,
    loader: authLoader,
  },
  {
    path: PATH_ROUTE.join,
    element: <Join />,
    errorElement: <Error />,
    loader: authLoader,
  },
];

export const router = createBrowserRouter(routes);
