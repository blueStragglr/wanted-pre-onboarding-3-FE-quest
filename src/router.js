import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pageA" element={<PageA />} />
      <Route path="/pageB" element={<PageB />} />
      <Route path="/pageC" element={<PageC />} />
    </Routes>  
  )
}
export default Router;