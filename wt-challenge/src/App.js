import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import PageA from './pages/pageA';
import PageB from './pages/pageB';
import PageC from './pages/pageC';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
      </Routes>
    </Router>
  );
}

export default App;
