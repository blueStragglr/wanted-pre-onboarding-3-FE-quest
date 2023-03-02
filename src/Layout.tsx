import Gnb from "./components/layout/Gnb";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

const Content = styled.main`
  flex: 1;
  border-left: 1px solid ${(props) => props.theme.darkGray};
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;

  > div {
    flex: 1;
  }
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Gnb />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};

export default Layout;
