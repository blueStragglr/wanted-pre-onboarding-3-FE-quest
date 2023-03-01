import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <Outlet />
    </div>
  );
}
