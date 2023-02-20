import styled from "styled-components";

const ADiv = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 100px;
`;

function PageA() {
    return (
        <ADiv>
            This is PageA!
        </ADiv>
    );
  }
  
  export default PageA;
  