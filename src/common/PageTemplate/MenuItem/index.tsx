/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
  children: ReactNode;
  to: string;
}

function MenuItem({ children, to }: MenuItemProps) {
  return (
    <>
      <li css={liCss}>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "none")}
          to={to}
        >
          {children}
        </NavLink>
      </li>
    </>
  );
}

const liCss = css`
  list-style: none;
  padding-bottom: 20px;

  .active {
    text-decoration: none;
    font-weight: bold;
    color: #3f88ff;
  }

  .none {
    text-decoration: none;
    color: #000;
  }
`;

const linkStyle = styled(NavLink)`
  line-height: 20px;
  color: #000;
  font-size: 16px;
`;

export default MenuItem;
