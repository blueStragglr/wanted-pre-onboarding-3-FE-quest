import Header from './components/Header';
import Nav from './components/Nav';
import Login from './pages/Login/Login';
import LandingPage from './pages/LandingPage';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import D from './pages/D';
import { LoginContext } from './context/LoginContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import StyleApp from './App.module.css';
import { useContext } from 'react';

function App() {
  const { isLogin } = useContext(LoginContext);
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

  return (
    <div className={StyleApp.App}>
      <Router>
        <Header />
        {isLogin ? (
          <div className={StyleApp.container}>
            <Nav pages={pages} />
            <Routes>
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
        ) : (
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
