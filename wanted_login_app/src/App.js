import { Fragment } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Intro from './components/Intro/Intro';
import DrawNav from './components/layout/DrawNav';
import Header from './components/layout/Header';
import Login from './components/Login/Login';


function App() {
  return (
    <BrowserRouter >
    <div className="App font-sans flex flex-col w-full h-screen">
      <Header />
      <main role="main" className="App font-sans flex flex-row w-full h-screen">
      <DrawNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="intro/*" element={<Intro />} />
        </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
