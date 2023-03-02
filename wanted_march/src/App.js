import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style/reset.css';
import './style/common.css';
import Login from './pages/Login.js';
import Main from './pages/Main.js';
import Intro from './pages/Intro.js';
import History from './pages/History.js';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Intro" element={<Intro />} />
            <Route path="/History" element={<History />} />
        </Routes>
    </div>
  );
}

export default App;
