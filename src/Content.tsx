import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Content() {
  return (
    <>
      <Header />
      <div className="content">
        <Sidebar />
        <div className="content-body"></div>
        <Outlet />
      </div>
    </>
  );
}
