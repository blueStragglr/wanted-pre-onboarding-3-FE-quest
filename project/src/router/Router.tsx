import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyPage } from "../pages/MyPage";
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
