import Header from './components/Header';
import Nav from './components/Nav';
import Login from './pages/Login';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import { Routes, Route, Outlet } from 'react-router-dom';
import StyleApp from './App.module.css';

function App() {
  return (
    <div className={StyleApp.App}>
      <Header />
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<Outlet />}>
          <Route path='/a' element={<A />} />
          <Route path='/b' element={<B />} />
          <Route path='/c' element={<C />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
