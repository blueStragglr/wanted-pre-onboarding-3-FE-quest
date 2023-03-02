import { Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Aside from "@/components/Layout/Aside";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <div className="main">
        <Aside />
        <Outlet />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 15px 50px;
  .main {
    display: flex;
    height: calc(100vh - 160px);
  }
`;

export default App;
