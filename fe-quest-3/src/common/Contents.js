import React from 'react';
import styled from "styled-components";
const ContentsWrap = styled.div`
    padding: 20px;        
    box-sizing: border-box;
`;


const Contents = ({children}) => {

    return (
        <ContentsWrap>{children}</ContentsWrap>
    );
};

export default Contents;