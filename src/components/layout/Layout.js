import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Main = styled.div`
    display: flex;
    flex-direction: row;
`;

const Context = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Main>
                <Sidebar />
                <Context>{props.children}</Context>
            </Main>
            <Footer />
        </div>
    );
};

export default Layout;

