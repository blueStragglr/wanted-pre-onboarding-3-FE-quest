import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PageADetailPage from "./pages/pageDetail/PageADetailPage";
import PageBDetailPage from "./pages/pageDetail/PageBDetailPage";
import PageCDetailPage from "./pages/pageDetail/PageCDetailPage";

import GlobalStyle from "./shared/style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pageDetail/A" element={<PageADetailPage />} />
        <Route path="/pageDetail/B" element={<PageBDetailPage />} />
        <Route path="/pageDetail/C" element={<PageCDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
