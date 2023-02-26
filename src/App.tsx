import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomHeader from "./components/CustomHeader";
import { mainStyle } from "./style";
import CustomNav from "./components/CustomNav";
import CustomSection from "./components/CustomSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainPage auth={auth} setAuth={setAuth}/>} />
        <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
