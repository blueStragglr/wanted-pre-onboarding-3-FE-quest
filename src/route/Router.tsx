import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage } from '../pages';

const RootRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
