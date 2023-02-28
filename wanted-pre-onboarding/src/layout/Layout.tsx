import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div`
  display: flex;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default Layout;
