import React from "react";
import Header from "../common/header";
import SideBar from "../common/sidebar";
import Layout from "../layout";

function Main() {
  return (
    <>
      <Header />
      <Layout>
        <SideBar />
      </Layout>
    </>
  );
}

export default Main;
