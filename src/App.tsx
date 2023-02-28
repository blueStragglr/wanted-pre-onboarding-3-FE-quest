import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Login from './routes/login';
import Index from './routes/index';
import PageA from './routes/page-a';
import PageB from './routes/page-b';
import PageC from './routes/page-c';
import PageD from './routes/page-d';
import { AuthProvider } from './context/auth';

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
  {
    path: 'page-d',
    name: 'Page D',
    element: <PageD />,
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
    element: <Login />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
