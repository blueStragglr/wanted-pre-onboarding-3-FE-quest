import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./routes/Home";
import Page from "./routes/Page";
import { Reset } from "styled-reset";
import SideNav from "./Component/SideNav";
import styled from "styled-components";


const Main = styled.main`
display: flex;
height: 100%;
`;
function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Header />
      <SideNav />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:PageId" element={<Page />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
