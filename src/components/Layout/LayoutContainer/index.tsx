import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
