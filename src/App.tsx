import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import CommonLayout from "./components/layout/CommonLayout"
import PrivateRoutes from "./pages/PrivateRoutes"
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"
import PageA from "./pages/PageA"
import PageB from "./pages/PageB"
import PageC from "./pages/PageC"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 공통 헤더와 사이드바 레이아웃 */}
          <Route element={<CommonLayout />}>
            {/* 로그인 필요 */}
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/page-a" element={<PageA />} />
              <Route path="/page-b" element={<PageB />} />
              <Route path="/page-c" element={<PageC />} />
            </Route>
          </Route>

          {/* 로그인 화면 */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
