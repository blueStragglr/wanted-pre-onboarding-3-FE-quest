import Home from './../pages/Home';
import PageA from './../pages/PageA';
import PageB from './../pages/PageB';
import PageC from './../pages/PageC';

const mocks = [
  {
    path: '/',
    element: <Home />,
    withAuth: false,
    label: '홈',
  },
  {
    path: '/page-a',
    element: <PageA />,
    withAuth: true,
    label: '페이지 A',
  },
  {
    path: '/page-b',
    element: <PageB />,
    withAuth: true,
    label: '페이지 B',
  },
  {
    path: '/page-c',
    element: <PageC />,
    withAuth: true,
    label: '페이지 C',
  },
];

export default mocks;
