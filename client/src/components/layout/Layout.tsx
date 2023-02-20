import Headers from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Headers />
      <MainBodyLayout>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </MainBodyLayout>
    </>
  );
}

export default Layout;

const MainBodyLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
`;

const Content = styled.section`
  padding-top: 100px;
  padding-left: 100px;
  position: fixed;
  display: flex;
  background-color: #fbc531;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
