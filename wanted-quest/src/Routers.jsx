import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function Routers() {
  return (
    <BrowserRouter>
        <Header />
        <Sidebar />
        <Switch>
            <PageA />
            <PageB />
            <PageC />
        </Switch>

    </BrowserRouter>
  );
}

export default Routers;