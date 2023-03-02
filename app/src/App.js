import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<PageA />} />
          <Route path="/b" element={<PageB />} />
          <Route path="/c" element={<PageC />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
