import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import PageA from '../PAGE/PageA';
import PageB from '../PAGE/PageB';
import PageC from '../PAGE/PageC';
import Login from '../PAGE/Login';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      { path: 'a', element: <PageA /> },
      { path: 'b', element: <PageB /> },
      { path: 'c', element: <PageC /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

export default router;
