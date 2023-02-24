import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './layouts/layout/layout';
import MainPage from './layouts/pages/MainPage';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/pageA' element={<PageA />} />
          <Route path='/pageB' element={<PageB />} />
          <Route path='/pageC' element={<PageC />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
