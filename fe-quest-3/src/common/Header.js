import React from 'react';
import styled from "styled-components";

const Header = () => {

    const HeaderWrap = styled.div`
        width: 100%;
        height: 70px;
        padding: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #e7e7e7;

        &> h1{
            font-style: italic;
            box-sizing: border-box;
            margin:0;
        }
        ;
    `;

    return (
        <HeaderWrap>
            <h1>Wanted Pre-onboarding course</h1>
        </HeaderWrap>
    );
};

export default Header;