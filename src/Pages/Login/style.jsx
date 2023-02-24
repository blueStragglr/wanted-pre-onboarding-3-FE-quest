import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 25rem;
  border: 0.1rem solid #dddddd;
  border-radius: 1rem;

  .loginbtn {
    margin-top: 3rem;
  }
`;

export const LoginInput = styled.input`
  width: 18rem;
  height: 2.5rem;
  margin-top: 2rem;
  border-radius: 1rem;
  text-indent: 1rem;
  outline: solid 0.125rem #dddddd;
  &:focus {
    outline: solid 0.2rem blue;
  }
`;
