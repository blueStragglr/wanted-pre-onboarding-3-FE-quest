import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import PageA from './Pages/PageA';
import PageB from './Pages/PageB';
import PageC from './Pages/PageC';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route path={'pageA'} element={<PageA />}></Route>
          <Route path={'pageB'} element={<PageB />}></Route>
          <Route path={'pageC'} element={<PageC />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
