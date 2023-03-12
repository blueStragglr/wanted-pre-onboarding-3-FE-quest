import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Component/Header";
import SideNav from "../Component/SideNav";
import { useParams } from "react-router-dom";

const ParentBody = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

function Home() {
  const { PageId } = useParams();
  return (
    <>
      <Header />
      <ParentBody>
        <SideNav />
        <MainContainer>
          {PageId ? <Outlet /> : "Welcome pre-onboarding"}
        </MainContainer>
      </ParentBody>
    </>
  );
}

export default Home;
