import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const LayoutBox = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  flex-basis: 100%;
  align-self: center;
  text-align: center;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <LayoutBox>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </LayoutBox>
    </>
  );
};

export default Layout;
