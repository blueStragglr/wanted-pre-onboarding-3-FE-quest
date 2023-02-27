import { NavLink } from "react-router-dom";

import { sideNavStyle } from "./SideNav.styles";

export default function SideNav() {
    const navLinks = [
        {name: "Page A", path: "page-a"},
        {name: "Page B", path: "page-b"},
        {name: "Page C", path: "page-c"}
    ];
    return (
        <ul className={sideNavStyle}>
            {navLinks.map((link) => <li><NavLink to={link.path}>{link.name}</NavLink></li>)}
        </ul>
    );
}