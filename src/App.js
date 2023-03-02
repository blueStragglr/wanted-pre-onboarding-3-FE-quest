import "./App.css";
import { BrowserRouter } from "react-router-dom";

import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Contents from "./components/Contents";

// CSS
import styled from "styled-components";

const AppBox = styled.div`
  display: flex;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppBox>
          <SideBar />
          <Contents />
        </AppBox>
      </div>
    </BrowserRouter>
  );
}

export default App;
