import React from 'react';
import { BrowserRouter as NavLink, Routes, Route, Router } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <li>
          <NavLink to = "/">Home</NavLink>
        </li>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;