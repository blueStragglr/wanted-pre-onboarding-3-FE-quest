import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 150px;
  padding: 20px;
  border-right: 1px solid #dcdcdc;
`;

export const NavStyle = styled(NavLink)`
  padding: 15px;
  font-size: 17px;
  font-weight: 400;
  border-radius: 13px;
  margin: 10px 0;

  &:hover {
    background-color: #dcdcdc;
    color: #fff;
  }
  &.active {
    background-color: #1a6dff;
    color: #fff;
  }
`;
