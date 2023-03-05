import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
