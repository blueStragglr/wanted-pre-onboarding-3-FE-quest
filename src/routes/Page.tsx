import { useParams } from "react-router-dom";
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

function Page() {
  const { PageId } = useParams();
  return (
    <>
      <Header />
      <SideNav />
      <MainContainer>I'm {PageId}</MainContainer>
    </>
  );
}

export default Page;
