import { createBrowserRouter } from 'react-router-dom';
import { PageA, PageB, PageC, NotFound } from '@pages';
import Layout from '@components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <PageA /> },
      { path: '*', element: <NotFound /> },
      { path: '/pageb', element: <PageB /> },
      { path: '/pagec', element: <PageC /> },
    ],
  },
]);

export default router;
