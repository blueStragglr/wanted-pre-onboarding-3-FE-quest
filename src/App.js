import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Contents from "./components/contents";

const AppWrap = styled.div`
  display: flex;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppWrap>
        <Sidebar />
        <Contents />
      </AppWrap>
    </BrowserRouter>
  );
}

export default App;
