import styled from "@emotion/styled";

export const Wrapper = styled.input`
  font-size: 1rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  padding: 0.8rem 1rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.25s;

  :focus {
    border: 1px solid #646cff;
  }
`;
