import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APage } from "../pages/APage";
import { BPage } from "../pages/BPage";
import { CPage } from "../pages/CPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<APage />} />
        <Route path="/bpage" element={<BPage />} />
        <Route path="/cpage" element={<CPage />} />
      </Routes>
    </BrowserRouter>
  );
};
