import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import SideBar from "./components/SideBar";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="center">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<PageA />}></Route>
            <Route exact path="/pageA" element={<PageA />}></Route>
            <Route exact path="/pageB" element={<PageB />}></Route>
            <Route exact path="/pageC" element={<PageC />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
