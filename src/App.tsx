import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './store/index';
import Layout from './layouts/layout/layout';
import MainPage from './layouts/pages/MainPage';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import LoginPage from './pages/LoginPage';

function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          {isAuth && (
            <>
              <Route path='/pageA' element={<PageA />} />
              <Route path='/pageB' element={<PageB />} />
              <Route path='/pageC' element={<PageC />} />
            </>
          )}
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
