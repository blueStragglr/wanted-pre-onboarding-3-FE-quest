import React from 'react';
import { BrowserRouter as NavLink, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
        Hello World
        <li>
          <NavLink to = "/">Home</NavLink>
        </li>
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
        </Routes>
    </div>
  );
}

export default App;
