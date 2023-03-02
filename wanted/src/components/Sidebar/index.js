/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import { css } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";

const SidebarStyle = css`
  flex-basis: 200px;
  flex-shrink: 0;
  border-right: 1px solid #ddd;

  ul {
    display: flex;
    flex-direction: column;

    li {
      width: 100%;
      border-bottom: 1px solid #ddd;

      &.active a {
        color: royalblue;
      }

      a {
        display: block;
        padding: 10px 20px;
        height: 100%;
        transition: 0.2s;

        &:hover {
          color: royalblue;
        }
      }
    }
  }
`;

const SideMenuList = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "PageA",
    path: "/a",
  },
  {
    id: 3,
    name: "PageB",
    path: "/b",
  },
  {
    id: 4,
    name: "PageC",
    path: "/c",
  },
];

const SideBar = () => {
  const location = useLocation();

  return (
    <article css={SidebarStyle}>
      <ul>
        {SideMenuList.map((menu) => (
          <li
            key={menu.id}
            className={location.pathname === menu.path && `active`}
          >
            <Link to={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SideBar;
