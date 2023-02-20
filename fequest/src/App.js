import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./pages/Login";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />}>
          <Route path="/login" element={<Login />} />
          <Route path="/a-page" element={<PageA />} />
          <Route path="/b-page" element={<PageB />} />
          <Route path="/c-page" element={<PageC />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
