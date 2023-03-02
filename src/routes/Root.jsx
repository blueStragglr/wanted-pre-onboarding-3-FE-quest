import React from "react";
import PageA from "../pages/PageA";
import PageB from "../pages/PageB";
import PageC from "../pages/PageC";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
export default function root() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
