import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideBarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  height: 100vh;
  width: 200px;
  box-sizing: border-box;
  border-right: 1px solid black;
  margin-top: 53px;
  padding: 10px;
`;

export const SideBarMenu = styled(Link)`
  color: black;
  font-size: 20px;
  font-weight: 500;
  box-sizing: border-box;
  padding: 5px;
  transition: all 0.5s;
  &:hover {
    color: #fff;
    background-color: #318ce7;
  }
`;
