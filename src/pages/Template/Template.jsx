import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styled from "styled-components";

function Template({ children }) {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        {children}
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  height: 100%;
`;

export default Template;
