import React from 'react';
import styled from "styled-components";

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
        white-space: nowrap;
        cursor: pointer;
        opacity: 1;

        &:hover{
        opacity: 0.6;
        transition: all 0.5s ease;
        font-weight: 700;
        }            
    }

    @media screen and (max-width: 500px) {
        height: auto;
        &> h1{white-space: normal;}
    }
`;

const Header = ({selectMenu}) => {    

    return (
        <HeaderWrap>
            <h1 onClick={()=>selectMenu('main')}>Wanted Pre-onboarding course</h1>
        </HeaderWrap>
    );
};

export default Header;