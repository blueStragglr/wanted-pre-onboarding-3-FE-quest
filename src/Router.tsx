import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/Layout';
import RouterInfo from 'constants/routerInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: RouterInfo.map((routerInfo) => ({
      path: routerInfo.path,
      element: routerInfo.element,
    })),
  },
]);

export default router;
