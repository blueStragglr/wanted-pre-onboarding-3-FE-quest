import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Sidebar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/pageA' element={<PageA/>}/>
            <Route path='/pageB' element={<PageB/>}/>
            <Route path='/pageC' element={<PageC/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
