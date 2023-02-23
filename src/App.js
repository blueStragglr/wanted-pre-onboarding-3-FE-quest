
import React from "react";
import {Routes,Route,Link} from 'react-router-dom';

import Home from "./page/Home";
import PageA from "./page/PageA";

function App() {
  return (
    <div className="App">
      <header>
        <h4>Wanted-pre-onboarding course</h4>
      </header>

      <div className="content-sec">
      
      <nav>
        <Link to ="/Home">home</Link>
        <Link to ="/PageA">pageA</Link>
      </nav>

      <Routes>
        <Route path="/Home" element ={<Home/>}></Route>
        <Route path="/PageA" element ={<PageA/>}></Route>
      </Routes>

      <div>
        <h1>ss</h1>
      </div>

      </div>
    </div>
  );
}

export default App;
