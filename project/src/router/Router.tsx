import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PageA } from "../pages/PageA";
import { PageB } from "../pages/PageB";
import { PageC } from "../pages/PageC";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
