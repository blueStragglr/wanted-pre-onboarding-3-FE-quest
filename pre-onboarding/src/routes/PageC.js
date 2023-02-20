import styled from "styled-components";

const CDiv = styled.div`
    width: 100%;
    height: 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size: 100px;
`;

function PageC() {
    return (
        <CDiv>This is PageC!</CDiv>
    );
  }
  
  export default PageC;
  