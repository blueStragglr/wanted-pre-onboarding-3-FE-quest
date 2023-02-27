import './styles/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import lodash from 'lodash';
import PageA from './components/pages/PageA';
import PageB from './components/pages/PageB';
import PageC from './components/pages/PageC';
import LoginPage from './components/pages/LoginPage';
import MainPage from './components/pages/MainPage';

function App() {
  window._ = lodash;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />}>
            <Route path="/page-a" element={<PageA />} />
            <Route path="/page-b" element={<PageB />} />
            <Route path="/page-c" element={<PageC />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
