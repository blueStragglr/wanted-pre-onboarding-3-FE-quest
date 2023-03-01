import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import CommonLayout from "./components/layout/CommonLayout"
import PageA from "./pages/PageA"
import PageB from "./pages/PageB"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 공통 헤더와 사이드바 레이아웃 */}
          <Route element={<CommonLayout />}>
            <Route path="/" element={<PageA />} />
            <Route path="/page-a" element={<PageA />} />
            <Route path="/page-b" element={<PageB />} />
          </Route>

          {/* 로그인 화면 */}
          {/* <Route /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
