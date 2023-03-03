import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/Main';
import Page from './pages/Page';

const router = createBrowserRouter([
    {
      path:"/",      // Container for all Routes
      element: <App />,
      children: [
        {
          path:"",
          element: <Main/>
        },
        {
          path:"pages/:pageId",
          element: <Page/>
        }
      ]
    },
  ])

  export default router;
  