import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import CommonLayout from "./components/layout/CommonLayout"
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
            <Route path="/" element={<MainPage />} />
            <Route path="/page-a" element={<PageA />} />
            <Route path="/page-b" element={<PageB />} />
            <Route path="/page-c" element={<PageC />} />
          </Route>

          {/* 로그인 화면 */}
          {/* <Route /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
