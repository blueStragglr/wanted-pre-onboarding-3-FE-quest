import React from "react";
import { NavLink } from "react-router-dom";

const NAVLINK = [
  { menu: "page01", link: "/page01" },
  { menu: "page02", link: "/page02" },
  { menu: "page03", link: "/page03" },
];

const Nav = () => {
  return (
    <div className="GNB">
      <ul>
        {NAVLINK.map((it, idx) => {
          return (
            <li key={idx}>
              <NavLink to={it.link}>{it.menu}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
