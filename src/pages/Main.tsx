import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

export const Main = () => {
    const location = useLocation();
    return (
        <div>
            <Header />
            <StyledMain>
                <Sidebar />
                <StyledSection>
                    {location.pathname === "/" && "메인페이지"}
                    <Outlet />
                </StyledSection>
            </StyledMain>
        </div>
    );
};

const StyledMain = styled.main`
    display: flex;
`;

const StyledSection = styled.section`
    padding-left: 20px;
    padding-top: 20px;
`;
