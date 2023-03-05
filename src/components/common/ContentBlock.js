import React from "react";
import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: blue;
`

function ContentBlock(props) {
    return (
        <Content {...props}/>
    );
};

export default ContentBlock;