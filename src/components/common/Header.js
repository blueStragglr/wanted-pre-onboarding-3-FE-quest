import React from 'react';
import styled from "styled-components";

const HeaderBlock = styled.div`
    width: 100%;
    height: 2rem;
    font-weight: bold;
    border-bottom: 1px solid;
    padding-left: 1rem;
`

function Header() {
    return (
        <>
            <HeaderBlock>
                <a href="/" style={{textDecoration:'none', color:'black'}}>Wanted Pre-onboarding course</a>
            </HeaderBlock>
        </>
    );
}

export default Header;