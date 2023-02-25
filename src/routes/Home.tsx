import styled from "styled-components";
import Header from "../Component/Header";
import SideNav from "../Component/SideNav";

const MainContainer = styled.div`
  margin-left: 150px;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <Header />
      <SideNav />
      <MainContainer>
        Welcome to Wanted pre-onboarding Challenge <br />
        <br />
        Please Click Page on your left Sidebar !
      </MainContainer>
    </>
  );
}

export default Home;
