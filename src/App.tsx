import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomHeader from "./components/CustomHeader";
import { mainStyle } from "./style";
import CustomNav from "./components/CustomNav";

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <div style={mainStyle}>
        <CustomNav />
      </div>
    </div>
  );
}

export default App;
