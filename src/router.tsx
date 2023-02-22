import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import PageA from './Page/PageA';
import PageB from './Page/PageB';
import PageC from './Page/PageC';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'pageA',
        element: <PageA />,
      },
      {
        path: 'pageB',
        element: <PageB />,
      },
      {
        path: 'pageC',
        element: <PageC />,
      },
    ],
  },
]);

export default router;
