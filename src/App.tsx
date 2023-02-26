import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomHeader from "./components/CustomHeader";
import { mainStyle } from "./style";
import CustomNav from "./components/CustomNav";
import CustomSection from "./components/CustomSection";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <BrowserRouter>
        <div style={mainStyle}>
          <CustomNav />
          <CustomSection />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
