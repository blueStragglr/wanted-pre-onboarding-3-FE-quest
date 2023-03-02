import React from "react";
import styled from "styled-components";
import SideNav from "../component/SideNav";
import Nav from "../component/Nav";

const HomeDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledPageA = styled.div`
  height: 100%;
  padding-top: 20px;
  padding-left: 20px;
`;
const PageA = () => {
  return (
    <>
      <Nav />
      <HomeDiv>
        <SideNav />
        <StyledPageA>
          <span>페이지 A</span>
        </StyledPageA>
      </HomeDiv>
    </>
  );
};

export default PageA;
