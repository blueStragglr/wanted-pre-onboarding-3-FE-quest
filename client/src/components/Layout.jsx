import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div>
      <Nav />
      <Content>
        <Sidebar />
        <Outlet />
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
`;
