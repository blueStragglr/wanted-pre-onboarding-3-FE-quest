import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/a" element={<PageA />} />
          <Route path="/b" element={<PageB />} />
          <Route path="/c" element={<PageC />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
