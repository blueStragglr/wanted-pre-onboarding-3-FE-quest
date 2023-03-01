import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PageA from './Pages/PageA';
import PageB from './Pages/PageB';
import PageC from './Pages/PageC';
import Login from './Pages/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route path={'pageA'} element={<PageA />}></Route>
          <Route path={'pageB'} element={<PageB />}></Route>
          <Route path={'pageC'} element={<PageC />}></Route>
        </Route>
        <Route path={'/login'} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
