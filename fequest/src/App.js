import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root/Root';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
