import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home';
import Intro from './components/Page/Intro';
import SubPage from './components/Page/SubPage';
import DrawNav from './components/layout/DrawNav';
import Header from './components/layout/Header';
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter >
    <div className="flex flex-col w-full h-screen font-sans App">
      <Header />
      <main role="main" className="flex flex-row w-full h-screen font-sans App">
      <DrawNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="intro/*" element={<Intro />} />
          <Route path="login/*" element={<Login />} />
          <Route path="sub/*" element={<SubPage />} />
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
