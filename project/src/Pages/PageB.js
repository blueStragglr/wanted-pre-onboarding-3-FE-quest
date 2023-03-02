import React from "react";
import styled from "styled-components";
import SideNav from "../component/SideNav";
import Nav from "../component/Nav";

const HomeDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledPageB = styled.div`
  height: 100%;
  padding-top: 20px;
  padding-left: 20px;
`;
const PageB = () => {
  return (
    <>
      <Nav />
      <HomeDiv>
        <SideNav />
        <StyledPageB>
          <span>페이지 B</span>
        </StyledPageB>
      </HomeDiv>
    </>
  );
};

export default PageB;
