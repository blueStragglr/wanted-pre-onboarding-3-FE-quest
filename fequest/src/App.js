import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root/Root';
import NotFound from './pages/NotFound/NotFound';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import D from './pages/D';
import E from './pages/E';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {path: '/a', element: <A />},
      {path: '/b', element: <B />},
      {path: '/c', element: <C />},
      {path: '/d', element: <D />},
      {path: '/e', element: <E />}
    ]}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
