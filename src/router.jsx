import {createBrowserRouter} from 'react-router-dom'
import App from './App';
import Home from './pages/Home';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: ( <Home /> ), },
      { path: 'page1', element: ( <Page1 /> ), },
      { path: 'page2', element: ( <Page2 /> ), },
      { path: 'page3', element: ( <Page3 /> ), },
    ],
  },
  // { path: '*', element: <NotFound />}
])

export default router