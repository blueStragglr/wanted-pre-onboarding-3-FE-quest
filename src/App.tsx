import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from 'layouts/layout';
import { MainPage } from './pages/MainPage';
import { PageA } from './pages/PageA';
import { PageB } from './pages/PageB';
import { PageC } from './pages/PageC';
import { LoginPage } from 'pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/pages/a' element={<PageA />} />
          <Route path='/pages/b' element={<PageB />} />
          <Route path='/pages/c' element={<PageC />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
