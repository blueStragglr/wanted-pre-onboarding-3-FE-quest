import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";

const Layout = () => {
  return (
    <>
      <Header />
      <NavLayout>
        <Nav />
        {/* 페이지마다 다르게 보여지는 부분 */}
        <main>
          <Outlet />
        </main>
      </NavLayout>
    </>
  );
};

export default Layout;

const NavLayout = styled.div`
  display: flex;
`;
