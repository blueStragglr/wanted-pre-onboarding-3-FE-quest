import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colorType } from "../types/colorType";

export default function SideBar(): JSX.Element {
  return (
    <SideBarStyle>
      <NavLink
        to="/"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? colorType.isActive : "inherit",
          };
        }}
      >
        Page A
      </NavLink>
      <NavLink
        to="/b"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? colorType.isActive : "inherit",
          };
        }}
      >
        Page B
      </NavLink>
      <NavLink
        to="/c"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? colorType.isActive : "inherit",
          };
        }}
      >
        Page C
      </NavLink>
    </SideBarStyle>
  );
}

const SideBarStyle = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;
  border-right: 1px solid ${colorType.layoutBorder};
`;
