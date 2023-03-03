import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Navbar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  margin: 0;
`;

const ContentContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default PageLayout;
