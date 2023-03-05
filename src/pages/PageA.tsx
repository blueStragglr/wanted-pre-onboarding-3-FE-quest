import styled from "styled-components";
import PageAContainer from "../views/pageA/container/PageAContainer";

function PageA() {
  return (
    <InnerWrap>
      <PageAContainer />
    </InnerWrap>
  );
}

export const InnerWrap = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3rem;
    display: inline-block;
    text-align: center;
    background: #000;
    color: #b6c828;
  }
`;

export default PageA;
