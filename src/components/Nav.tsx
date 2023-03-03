import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface IProps {
    menus: INav[];
    depth: number;
}

export const Nav = ({ menus, depth = 1 }: IProps) => {
    let { pathname } = useLocation();
    pathname = pathname.slice(1, pathname.length);
    return (
        <>
            {menus.map((data) => {
                console.log(pathname, data.path, pathname === data.path);
                if (data.children && data.children.length > 0) {
                    return (
                        <StyledNav key={data.path} depth={depth} match={pathname === data.path}>
                            <Link to={data.path}>{data.name}</Link>
                            <Nav menus={data.children} depth={depth + 1} />
                        </StyledNav>
                    );
                }
                return (
                    <StyledNav key={data.path} depth={depth} match={pathname === data.path}>
                        <Link to={data.path}>{data.name}</Link>
                    </StyledNav>
                );
            })}
        </>
    );
};

const StyledNav = styled.div<{ depth: number; match: boolean }>`
    padding-left: ${({ depth }) => depth * 20 + "px"};
    margin-top: 10px;
    a {
        text-decoration: none;
        color: ${({ match }) => (match ? "skyblue" : "black")};
    }
`;
