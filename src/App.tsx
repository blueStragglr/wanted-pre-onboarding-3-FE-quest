import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomHeader from "./components/CustomHeader";
import { Link } from "react-router-dom";

const mainStyle = {
  height: "93vh",
  width: "100%",
  background: "lightgreen",
  display: "flex",
};

const navStyle = {
  width: "300px",
  height: "100%",
  background: "pink",
  display: "flex",
  flexDirection: "column" as const,
};

function App() {
  return (
    <div className="App">
      <CustomHeader />
      <div style={mainStyle}>
        <nav style={navStyle}>
          <Link to="/page_a">Page A</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
