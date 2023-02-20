import styled from "styled-components";

const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 100px;
`;


function Main() {
    return (
        <MainDiv>
            This is Main!
        </MainDiv>
    );
  }
  
  export default Main;
  