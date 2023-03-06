import React from "react";
import { Link } from "react-router-dom";
import { MAIN_PAGES } from "../routerPath";

export function MainNav() {
  return (
    <nav className="main-nav">
      {MAIN_PAGES.map((page) => (
        <Menu key={page.path} link={page.path} title={page.title} />
      ))}
    </nav>
  );
}

function Menu({ title, link }) {
  return (
    <Link to={link} className="menu">
      {title}
    </Link>
  );
}
