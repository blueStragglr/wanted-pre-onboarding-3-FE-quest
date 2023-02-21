import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterStyle>
            This is footer
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    padding : 30px;
    border : 2px solid black;
`

export default Footer;