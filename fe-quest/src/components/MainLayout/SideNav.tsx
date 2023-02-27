import { sideNavStyle, StyledNavLink } from "./SideNav.styles";

export default function SideNav() {
    const navLinks = [
        {name: "Page A", path: "page-a"},
        {name: "Page B", path: "page-b"},
        {name: "Page C", path: "page-c"}
    ];
    return (
        <ul className={sideNavStyle}>
            {navLinks.map((link) => <li><StyledNavLink className={({isActive}) => ('nav-link' + isActive ? '-activated' : "")} to={link.path}>{link.name}</StyledNavLink></li>)}
        </ul>
    );
}