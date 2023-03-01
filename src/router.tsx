import { createBrowserRouter } from 'react-router-dom';
import { Root, Error, PageA, PageB, PageC } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'pageA',
        element: <PageA />,
        errorElement: <Error />,
      },
      {
        path: 'pageB',
        element: <PageB />,
        errorElement: <Error />,
      },
      {
        path: 'pageC',
        element: <PageC />,
        errorElement: <Error />,
      },
    ],
  },
]);
