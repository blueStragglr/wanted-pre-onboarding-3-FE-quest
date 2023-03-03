import { Routes, Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Login from './pages/Login';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>  
  )
}
export default Router;