import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import A from './pages/A';
import B from './pages/B';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='/a' element={<A />} />
          <Route path='/b' element={<B />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
