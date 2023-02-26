import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './page/Main/Main';
import MainA from './page/Main/components/A/MainA';
import MainB from './page/Main/components/B/MainB';
import MainC from './page/Main/components/C/MainC';
import Login from './page/Login/Login';
import Mypage from './page/Main/components/Mypage/Mypage';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<MainA />} />
            <Route path="B" element={<MainB />} />
            <Route path="C" element={<MainC />} />
            <Route path="mypage" element={<Mypage />} />
          </Route>
          <Route path="/login" element={<Login mode="login" />} />
          <Route path="/signup" element={<Login mode="signup" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
