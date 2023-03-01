import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderComp from "../components/HeaderComp";
import NavMenuComps from "../components/NavMenuComp";

const LayoutDiv = styled.div`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const Layout = () => {
    return (
        <LayoutDiv>
            <HeaderComp />
            <NavMenuComps />
            <Outlet />
        </LayoutDiv>
    );
}

export default Layout;