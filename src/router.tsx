import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import PageA from './pages/pageA';
import PageB from './pages/pageB';
import PageC from './pages/pageC';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <PageA /> },
      { path: '/b', element: <PageB /> },
      { path: '/c', element: <PageC /> },
    ],
  },
]);

export default router;
