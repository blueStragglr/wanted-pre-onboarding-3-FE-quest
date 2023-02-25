import { useParams } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  margin-left: 150px;
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border : 1px solid black;
  
`;

function Page() {

  const {PageId} = useParams()
  return (
    <>
      <MainContainer>I'm {PageId}</MainContainer>
    </>
  );
}

export default Page;
