import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import mocks from './mocks/mock';
import Layout from './components/Layout';

const Router = createBrowserRouter(
  mocks.map((a) => {
    return {
      path: a.path,
      element: (
        <Layout path={a.path.replace(/\/\*$/g, '')} withAuth={a.withAuth}>
          {a.element}
        </Layout>
      ),
    };
  })
);

export default Router;
