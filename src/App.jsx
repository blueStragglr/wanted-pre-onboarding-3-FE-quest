import Header from './components/Header';
import Nav from './components/Nav';
import Login from './pages/Login';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import D from './pages/D';
import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import StyleApp from './App.module.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const pages = [
    {
      path: 'a',
      component: <A />,
    },
    {
      path: 'b',
      component: <B />,
    },
    {
      path: 'c',
      component: <C />,
    },
    {
      path: 'd',
      component: <D />,
    },
  ];

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={StyleApp.App}>
      <Header isLogin={isLogin} />
      <Nav pages={pages} />
      <Routes>
        <Route
          path='/login'
          element={<Login isLogin={isLogin} onLogin={handleLogin} />}
        />
        <Route element={<Outlet />}>
          {pages.map((page) => (
            <Route
              key={uuidv4()}
              path={`/${page.path}`}
              element={page.component}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
