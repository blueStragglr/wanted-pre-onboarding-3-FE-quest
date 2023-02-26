import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/index.js';
import Main from './pages/Main/index.js';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import PageD from './pages/PageD';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route 
            path="/pageA"
            element={<PageA />}
          />
          <Route 
            path="/pageB"
            element={<PageB />}
          />
          <Route 
            path="/pageC"
            element={<PageC />}
          />
          <Route 
            path="/pageD"
            element={<PageD />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
