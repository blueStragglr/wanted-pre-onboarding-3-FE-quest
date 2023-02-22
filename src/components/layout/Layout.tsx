import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Content>
                <Outlet />
            </Content>
        </>
    );
};

export default Layout;

const Content = styled("main")`
    top: 40px;
    left: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    flex: 1;
    width: 100%;
    height: 100%;
`;
