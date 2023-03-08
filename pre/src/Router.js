import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import mocks from './mocks/mock';
import Layout from './components/Layout';

const Router = createBrowserRouter(
  mocks.map((a) => {
    console.log(a.element, a.path);
    return a.withAuth
      ? {
          path: a.path,
          element: <Layout path={a.path.replace(/\/\*$/g, '')}>{a.element}</Layout>,
        }
      : { path: a.path, element: a.element };
  })
);

export default Router;
