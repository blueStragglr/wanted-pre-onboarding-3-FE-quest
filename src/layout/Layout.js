import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
