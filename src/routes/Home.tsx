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

function Home() {
  return (
    <>
      <MainContainer>
        Welcome to Wanted pre-onboarding Challenge <br /><br />
        Please Click Page on your left Sidebar !
      </MainContainer>
    </>
  );
}

export default Home;
