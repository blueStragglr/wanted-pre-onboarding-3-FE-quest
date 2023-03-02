import styled from 'styled-components';

export const LoginArea = styled.div`
  width: 28vw;
  height: 40vh;
  border: 1px solid #9f9f9f;
  padding: 40px 56px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginContent = styled.div`
  height: 100%;
  text-align: center;
`;

export const LoginTitle = styled.p`
  margin-bottom: 50px;
  font-size: 36px;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  margin: 10px 0;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 36px;
  margin-top: 20px;
`;
