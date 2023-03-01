import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import styled from 'styled-components';

const Contents = styled.div`
  display: flex;
`

function Routers() {
  return (
    <BrowserRouter>
      <Header />
      <Contents>
        <Sidebar />
        <Switch>
          <Route path={"/"} exact component={PageA} />
          <Route path={"/pageB"} exact component={PageB} />
          <Route path={"/pageC"} exact component={PageC} />
        </Switch>
      </Contents>
    </BrowserRouter>
  );
}

export default Routers;