import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: #303030;

  @media (prefers-color-scheme: light) {
    background: #ebebeb;
  }
`;
