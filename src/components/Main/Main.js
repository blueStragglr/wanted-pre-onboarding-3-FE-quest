import React from "react";
// library imports
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// Page imports
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";

let Main = () => {

    return(
        <div>
            <Router>
                <HeaderSc>
                    <NavLink to = "/"><span>Home</span></NavLink>
                    <NavLink to = "/Page1"><span>Page1</span></NavLink>
                    <NavLink to = "/Page2"><span>Page2</span></NavLink>
                    <NavLink to = "/Page3"><span>Page3</span></NavLink>
                </HeaderSc>
                <BodySC>
                    <Routes>
                        <Route to = "/" element={<Home />}></Route>
                        <Route to= "/Page1" element={<Page1 />}></Route>
                        <Route to = "/Page2" element={<Page2 />}></Route>
                        <Route to = "/Page3" element={<Page3 />}></Route>
                    </Routes>
                </BodySC>
                <Footer/>
            </Router>
        </div>
    )
}
const HeaderSc = styled.header`
    padding: 10px;
    & span {
        margin-left: 10px;
        padding: 20px;
        color: #000000;
    }
`
const BodySC = styled.div`
    padding : 100px;
    border : 2px solid black;
`
export default Main;