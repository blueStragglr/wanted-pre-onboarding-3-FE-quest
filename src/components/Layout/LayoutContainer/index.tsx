import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const LayoutContainer = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default LayoutContainer;
