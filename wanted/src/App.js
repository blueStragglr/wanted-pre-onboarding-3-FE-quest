/** @jsxImportSource @emotion/react */

import { Route, Routes } from "react-router-dom";
import { css } from "@emotion/react";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import SideBar from "./components/Sidebar";

import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

const mainStyle = css`
  display: flex;
  padding-top: 60px;
  min-height: 100vh;
`;

const contentStyle = css`
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 500;
  color: royalblue;
`;

function App() {
  return (
    <>
      {/* Global Reset */}
      <GlobalStyles />

      <Header />

      <main css={mainStyle}>
        <SideBar />

        <div css={contentStyle}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/a"} element={<PageA />} />
            <Route path={"/b"} element={<PageB />} />
            <Route path={"/c"} element={<PageC />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
