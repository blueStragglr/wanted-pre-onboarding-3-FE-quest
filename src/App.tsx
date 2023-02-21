import './main.css';

import { Routes, Route } from 'react-router-dom';
import Login from 'views/Login';
import Main from 'views/Main';
import NotFound from 'views/NotFound';
import Layout from 'components/Layout';
import { Routes as RoutesInfo, IRoutes } from 'utils/Routes';
import { Suspense } from 'react';
import LoginCheck from './components/LoginCheck';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          {RoutesInfo.map((route: IRoutes) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.loginCheck ? (
                  <LoginCheck>{route.element}</LoginCheck>
                ) : (
                  route.element
                )
              }
            />
          ))}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
