import { createBrowserRouter } from 'react-router-dom';
import { Authorization } from '@/components/Authorization';
import { Root, Error, PageA, PageB, PageC, Login } from '@/pages';

interface RouterItem {
  path: string;
  element: React.ReactNode;
  withAuthorization: boolean;
  label: string;
  errorElement: React.ReactNode;
}

interface SidebarItem {
  path: string;
  label: string;
}

const RouterInfo: RouterItem[] = [
  {
    path: '/',
    element: <Root />,
    withAuthorization: false,
    label: 'home',
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    withAuthorization: false,
    label: 'login',
    errorElement: <Error />,
  },
  {
    path: '/pageA',
    element: <PageA />,
    withAuthorization: true,
    label: 'Page A',
    errorElement: <Error />,
  },
  {
    path: '/pageB',
    element: <PageB />,
    withAuthorization: true,
    label: 'Page B',
    errorElement: <Error />,
  },
  {
    path: '/pageC',
    element: <PageC />,
    withAuthorization: true,
    label: 'Page C',
    errorElement: <Error />,
  },
];

export const router = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    return routerInfo.withAuthorization
      ? {
          path: routerInfo.path,
          element: <Authorization>{routerInfo.element}</Authorization>,
          errorElement: <Error />,
        }
      : {
          path: routerInfo.path,
          element: routerInfo.element,
          errorElement: <Error />,
        };
  }),
);

export const SidebarContent: SidebarItem[] = (() =>
  RouterInfo.reduce((prev, current) => {
    if (current.withAuthorization) {
      return [
        ...prev,
        {
          path: current.path,
          label: current.label,
        },
      ];
    }
    return prev;
  }, [] as SidebarItem[]))();
