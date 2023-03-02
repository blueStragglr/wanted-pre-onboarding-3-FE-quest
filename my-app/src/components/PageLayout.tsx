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
        <div>
          <Outlet />
        </div>
      </Container>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
`;
export default PageLayout;
