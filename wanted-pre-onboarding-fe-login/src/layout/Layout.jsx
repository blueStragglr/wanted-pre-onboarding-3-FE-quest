import Side from "../components/common/Side";
import styled from "styled-components";
import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
import Data from "./../constants/common";

const MainLayout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Side menus={Data.Menus} />
        <Outlet />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

export default MainLayout;
