import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './../layouts/Layout';
import PageA from './../pages/PageA';
import PageB from './../pages/PageB';
import PageC from './../pages/PageC';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'pageA', element: <PageA /> },
        { path: 'pageB', element: <PageB /> },
        { path: 'pageC', element: <PageC /> },
      ],
    },
  ]);
};

export default Router;
