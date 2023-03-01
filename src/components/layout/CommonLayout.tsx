import React from "react"
import { Outlet } from "react-router-dom"

import Header from "../header/header"
import SideBar from "../side/SideBar"

function CommonLayout() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ backgroundColor: "yellow" }}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default CommonLayout
