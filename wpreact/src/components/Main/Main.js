import React from "react";
// library imports
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// Page imports
import Home from "../Home/Home";
import Login from "../User/Login";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";

const Main = () => {
    return(
        <div>
            <Router>
                <HeaderSc>
                    <NavLink to = "/"><span>Home</span></NavLink>
                    <NavLink to = "/Page1">Page1</NavLink>
                    <NavLink to = "/Page2">Page2</NavLink>
                    <NavLink to = "/Page3">Page3</NavLink>
                    <NavLink to = "/Login">Login</NavLink>
                </HeaderSc>
                <BodySC>
                    <Routes>
                        <Route path = "/" element={<Home />}></Route>
                        <Route path = "/Page1" element={<Page1 />}></Route>
                        <Route path = "/Page2" element={<Page2 />}></Route>
                        <Route path = "/Page3" element={<Page3 />}></Route>
                        <Route path = "/Login" element={<Login />}></Route>
                    </Routes>
                </BodySC>
            </Router>
        </div>
    )
}

const HeaderSc = styled.header`
    padding : 2%;
    & NavLink {
        color : black;
    }
`

const BodySC = styled.div`
    padding : 10%;
    border : 1px solid black;
`

export default Main;