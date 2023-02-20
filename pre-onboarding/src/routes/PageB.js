import styled from "styled-components";

const BDiv = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 100px;
`;

function PageB() {
    return (
        <BDiv>This is PageB!</BDiv>
    );
  }
  
  export default PageB;
  