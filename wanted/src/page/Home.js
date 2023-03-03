import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <HomeContainer>
      <Navbar />
      <Outlet />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
`;
