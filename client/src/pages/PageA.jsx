import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  text-align: center;
  padding: 20px 0px 0px 0px;

  p {
    font-size: 20pt;
    font-weight: 800;
  }
`

const PageA = () => {
  return (
    <StyledMain>
      <p>This is Page A!</p>
    </StyledMain>
  )
}

export default PageA;