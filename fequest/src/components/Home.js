import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const ContentSection = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 50vh;
  padding-left: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <ContentSection>
        <Outlet />
      </ContentSection>
    </>
  );
};

export default Home;
