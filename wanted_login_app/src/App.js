import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter >
      <Routes>
      <Route path="login/*" element={<Login />} />
      <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
