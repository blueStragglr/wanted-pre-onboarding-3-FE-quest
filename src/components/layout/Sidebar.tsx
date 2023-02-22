import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
    const menus = [
        { name: "Page  A", path: "pageA" },
        { name: "Page  B", path: "pageB" },
        { name: "Page  C", path: "pageC" },
    ];

    return (
        <SidebarWrapper>
            <SidbarUl>
                {menus.map((menu, idx) => (
                    <SidebarItem key={idx}>
                        <StyledNavLink to={menu.path} key={idx}>
                            {menu.name}
                        </StyledNavLink>
                    </SidebarItem>
                ))}
            </SidbarUl>
        </SidebarWrapper>
    );
};

export default Sidebar;

const SidebarWrapper = styled("div")`
    height: 100%;
    position: fixed;
    top: 81px;
    left: 0;
    width: 240px;
    border-right: 1px solid black;
    z-index: 999;
`;
const SidbarUl = styled("ul")`
    list-style: none;
`;
const SidebarItem = styled("li")``;

const StyledNavLink = styled(NavLink)`
    box-sizing: border-box;
    display: block;
    padding: 4px 8px;
    margin: 0 auto;
    text-align: center;
    color: black;
    text-decoration: none;
    margin-bottom: 30px;

    &.active {
        color: #00aeff;
        font-weight: bold;
        top: 2px;
    }
`;
