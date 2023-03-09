import { RouterItem } from '@projects/types';
import { PageA, PageB, PageC, NotFound } from '@pages';

const RouterInfo: RouterItem[] = [
  {
    path: '/*',
    element: <NotFound />,
    withAuthorization: false,
    title: 'notFound',
  },
  {
    path: '/',
    element: <PageA />,
    withAuthorization: false,
    title: 'PageA',
  },
  {
    path: '/page-b',
    element: <PageB />,
    withAuthorization: false,
    title: 'PageB',
  },
  {
    path: '/page-c',
    element: <PageC />,
    withAuthorization: false,
    title: 'PageC',
  },
];
export default RouterInfo;
