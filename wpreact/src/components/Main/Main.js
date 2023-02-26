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

const Main = () => {

    // 로그인 버튼을 눌렀을 때 LocalStorage에 Status를 넣어서 값을 확인하게 만들기
    const LoginFunction = () => {
        localStorage.setItem('Status','PreLogin')
        window.location.href = './'
    }

    return(
        <div>
            <Router>
                <HeaderSc>
                    <NavLink to = "/"><span>Home</span></NavLink>
                    <NavLink to = "/Page1">Page1</NavLink>
                    <NavLink to = "/Page2">Page2</NavLink>
                    <NavLink to = "/Page3">Page3</NavLink>
                    <button onClick = {LoginFunction}>Login</button>
                </HeaderSc>
                <BodySC>
                    <Routes>
                        <Route path = "/" element={<Home />}></Route>
                        <Route path = "/Page1" element={<Page1 />}></Route>
                        <Route path = "/Page2" element={<Page2 />}></Route>
                        <Route path = "/Page3" element={<Page3 />}></Route>
                    </Routes>
                </BodySC>
                <Footer />
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