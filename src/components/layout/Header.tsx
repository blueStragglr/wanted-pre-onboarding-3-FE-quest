import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));
    return (
        <HeaderWrapper>
            <HeaderDiv>
                <span>Wanted Pre-onboarding course</span>
                <Navbar>
                    {loggedIn ? (
                        <StyledNavLink
                            onClick={() => {
                                localStorage.removeItem("login");
                                setLoggedIn(null);
                            }}
                            to={"/"}
                        >
                            Logout
                        </StyledNavLink>
                    ) : (
                        <>
                            <StyledNavLink to={"/login"}>Login</StyledNavLink>
                            <StyledNavLink to={"/signup"}>회원가입</StyledNavLink>
                        </>
                    )}
                </Navbar>
            </HeaderDiv>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled("header")`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 80px;
    border: 1px solid black;
    z-index: 999;
`;

const HeaderDiv = styled("div")`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    height: 100%;
    align-items: center;
`;
const StyledNavLink = styled(NavLink)`
    box-sizing: border-box;
    display: block;
    padding: 4px 8px;
    margin: 0 auto;
    text-align: center;
    color: black;
    text-decoration: none;

    &.active {
        color: green;
    }
`;

const Navbar = styled("nav")`
    background-color: "white";
    display: flex;
`;
