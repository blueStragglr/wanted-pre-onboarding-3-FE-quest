import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  border: solid black 1px;
  background-color: white;
  z-index: 1;
  .loginblank {
    margin-right: 100px;
  }
`;

export const Box = styled.div`
  box-sizing: border-box;
  margin: 15px;
`;
