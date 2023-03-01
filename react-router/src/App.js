import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route path="/PageA" element={<PageA />} />
        <Route path="/PageB" element={<PageB />} />
        <Route path="/PageC" element={<PageC />} />
      </Route>
    </Routes>
  );
}

export default App;
