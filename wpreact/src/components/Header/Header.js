import React from "react";
import { NavLink , Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import Page1 from "../Body/Page1";
import Page2 from "../Body/Page2";
import Page3 from "../Body/Page3";

const Header = () => {
    return (
        <HeaderStyle>
        Wanted Pre-onboarding course
            <NavLink to='/Page1'>Page 1</NavLink>
            <NavLink to='/Page2'>Page 2</NavLink>
            <NavLink to='/Page3'>Page 3</NavLink>
            <Routes>
                <Route path = '/Page1' element = {<Page1 />}></Route>
                <Route path = '/Page2' element = {<Page2 />}></Route>
                <Route path = '/Page3' element = {<Page3 />}></Route>
            </Routes>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    padding : 30px;
    border : 2px solid black;
`

export default Header;