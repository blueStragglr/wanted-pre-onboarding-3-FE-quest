import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Index from './routes/index';
import PageA from './routes/page-a';
import PageB from './routes/page-b';
import PageC from './routes/page-c';

export const pages = [
  {
    path: 'page-a',
    name: 'Page A',
    element: <PageA />,
  },
  {
    path: 'page-b',
    name: 'Page B',
    element: <PageB />,
  },
  {
    path: 'page-c',
    name: 'Page C',
    element: <PageC />,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <Index /> }, ...pages],
  },
  {
    path: '/login',
    element: <div>Login page</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
