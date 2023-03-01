import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  padding: 10px;
`;

export const HeaderLogo = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const HeaderSignInBtn = styled.button`
  width: 80px;
  height: 30px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #6cb4ee;
  font-size: 16px;
  color: #fff;
  transition: all 0.5s;
  &:hover {
    background-color: #318ce7;
  }
`;
