import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-right: 1px solid #a7a7a7;
  width: 150px;
  height: 100%;
  box-sizing: border-box;
`;

export const Navigation = styled(NavLink)`
  text-decoration: none;
  color: #383838;
  margin: 0 0 10px 0;
  font-weight: 300;

  &.active {
    font-weight: 500;
  }
`;
