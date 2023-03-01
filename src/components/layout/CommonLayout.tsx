import React from "react"
import { Outlet } from "react-router-dom"

import Header from "../header/header"
import SideBar from "../side/SideBar"

// 헤더와 사이드바가 보이는 레이아웃
function CommonLayout() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default CommonLayout
