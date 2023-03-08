import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './Layout/MainLayout/MainLayout';
import PageA from './Pages/PageA';
import PageB from './Pages/PageB';
import PageC from './Pages/PageC';
import Login from './Pages/Login/Login';
import reset from './Style/style';
import { Global } from '@emotion/react';
import { ComponentType } from 'react';

interface RouterItem {
  path: string;
  component: ComponentType<any>;
  withAuthorization: boolean;
  label: string;
  children?: RouterItem[];
}

function App() {
  const RouterInfo: RouterItem[] = [
    {
      path: '/login',
      component: Login,
      withAuthorization: false,
      label: '로그인',
    },
    {
      path: '/',
      component: PageA,
      withAuthorization: true,
      label: 'MainPage',
      children: [
        {
          path: '/pagea',
          component: PageA,
          withAuthorization: true,
          label: 'PageA',
        },
        {
          path: '/pageb',
          component: PageB,
          withAuthorization: true,
          label: 'PageB',
        },
        {
          path: '/pagec',
          component: PageC,
          withAuthorization: true,
          label: 'PageC',
        },
      ],
    },
  ];
  return (
    <>
      <Global styles={reset} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path={'/'} element={<Mainlayout />}>
            <Route path={'/pagea'} element={<PageA />} />
            <Route path={'/pageb'} element={<PageB />} />
            <Route path={'/pagec'} element={<PageC />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
