import './App.css';
import { Route, Routes } from 'react-router-dom';
import Apage from './pages/Apage'
import Bpage from './pages/Bpage'
import Cpage from './pages/Cpage'
import Login from './pages/Login'
import Layout from './components/Layout/Layout'


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Apage />} />
        <Route path='/A' element={<Apage />} />
        <Route path='/B' element={<Bpage />} />
        <Route path='/C' element={<Cpage />} />
      </Route>
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
