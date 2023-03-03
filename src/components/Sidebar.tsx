import { useNav } from "@/hooks/useNav";
import styled from "styled-components";
import { Nav } from "./Nav";

export const Sidebar = () => {
    const { menus } = useNav();
    return (
        <StyledSidebar>
            <Nav menus={menus} depth={1} />
        </StyledSidebar>
    );
};

const StyledSidebar = styled.div`
    width: 200px;
    height: calc(100vh - 60px);
    padding-left: 20px;
    padding-top: 10px;
    border-right: 1px solid black;
`;
