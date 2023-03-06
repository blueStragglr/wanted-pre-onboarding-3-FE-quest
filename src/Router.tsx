import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Main from './pages/Main';
import Page from './pages/Page';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const accessToken = localStorage.getItem('access_token');

const router = createBrowserRouter([
  {
    path: '/', // Container for all Routes
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'pages/:pageId',
        element: <Page />,
      },
    ],
  },
  {
    path: 'signup',
    element: accessToken ? <Navigate replace to={'/'} /> : <SignUp />,
  },
  {
    path: 'signin',
    element: accessToken ? <Navigate replace to={'/'} /> : <SignIn />,
  },
]);

export default router;
