import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/a-page" element={<PageA />} />
        <Route path="/b-page" element={<PageB />} />
        <Route path="/c-page" element={<PageC />} />
      </Route>
    </Routes>
  );
}

export default App;
