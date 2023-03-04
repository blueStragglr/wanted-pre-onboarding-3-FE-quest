import styled from "@emotion/styled"

export const Base = styled.nav`
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  ul {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 140px;
    padding: 10px 20px;
  }

  a {
    display: block;
    width: 100%;
    padding: 5px;

    &.active {
      color: #0f82c0;
    }
  }
`
