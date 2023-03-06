import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Detail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
