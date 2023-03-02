import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const StyledContent = styled.div`
  flex-basis: 100%;
  align-self: center;
  text-align: center;
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      <StyledLayout>
        <Sidebar />
        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledLayout>
    </>
  );
};

export default MainLayout;
