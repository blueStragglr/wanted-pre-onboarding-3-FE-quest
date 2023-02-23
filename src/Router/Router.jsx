import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Login from '../pages/Login';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<App />}>
          <Route path={':pageId'} element={<Page />} />
        </Route>
      </Route>

      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default Router;
