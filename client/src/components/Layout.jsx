import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <main>
        <Sidebar />
        <article>{children}</article>
      </main>
    </section>
  );
};

export default Layout;
