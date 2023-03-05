import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from "./components/Layout/LayoutContainer";
import APage from "./pages/APage";
import BPage from "./pages/BPage";
import CPage from "./pages/CPage";
import { PATH_NAME } from "./constants/path";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Routes>
          <Route path={PATH_NAME.PAGE_A} element={<APage />} />
          <Route path={PATH_NAME.PAGE_B} element={<BPage />} />
          <Route path={PATH_NAME.PAGE_C} element={<CPage />} />
        </Routes>
      </LayoutContainer>
    </BrowserRouter>
  );
}

export default App;
