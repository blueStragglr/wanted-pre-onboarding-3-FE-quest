import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function A() {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Contents>This is Page A!</Contents>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  height: 100%;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  font-size: 2rem;
  font-weight: bold;
`;

export default A;
