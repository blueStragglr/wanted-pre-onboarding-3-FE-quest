import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

import styled from "styled-components";

const LazyPageA = lazy(() => import("./pages/PageA"));
const LazyPageB = lazy(() => import("./pages/PageB"));
const LazyPageC = lazy(() => import("./pages/PageC"));

function App() {
  return (
    <Wrapper>
      <Header />
      <FlexDiv>
        <Suspense fallback="로딩중">
          <BrowserRouter>
            <SideBar />
            <Routes>
              <Route path="/" element={<LazyPageA />} />
              <Route path="/2" element={<LazyPageB />} />
              <Route path="/3" element={<LazyPageC />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </FlexDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 3px solid red;
`;
const FlexDiv = styled.div`
  display: flex;
`;

export default App;
