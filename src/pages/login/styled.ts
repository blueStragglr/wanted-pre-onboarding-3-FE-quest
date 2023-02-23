import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  padding: 50px;
`;

export const Title = styled.p`
  margin: 0 0 20px 0;
  color: #383838;
  font-size: 18px;
  font-weight: 300;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 0 0 10px 0;
  width: 250px;
  font-size: 14px;
  outline: none;
  border: none;
  color: #383838;
  background-color: #f3f3f3;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const LoginButton = styled.button`
  font-size: 14px;
  width: 250px;
  padding: 10px;
  margin: 10px 0 0 0;
  border: none;
  border-radius: 4px;
  color: #383838;
  background-color: #76d7c4;
  transition-duration: 0.2s;

  :hover {
    background-color: #48c9b0;
  }
`;
