import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import "./MainPage.css";

export default function MainPage() {
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
