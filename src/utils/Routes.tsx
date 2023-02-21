import { lazy } from 'react';

const PageA = lazy(() => import('../views/pages/PageA'));
const PageB = lazy(() => import('../views/pages/PageB'));
const PageC = lazy(() => import('../views/pages/PageC'));

export interface IRoutes {
  pageName: string;
  path: string;
  loginCheck: boolean;
  element: JSX.Element;
}

export const Routes: IRoutes[] = [
  {
    pageName: 'Page A',
    path: '/page1',
    loginCheck: true,
    element: <PageA />,
  },
  {
    pageName: 'Page B',
    path: '/page2',
    loginCheck: true,
    element: <PageB />,
  },
  {
    pageName: 'Page C',
    path: '/page3',
    loginCheck: true,
    element: <PageC />,
  },
];
