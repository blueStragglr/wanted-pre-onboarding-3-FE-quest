import React from "react";
import styled from "styled-components";


// Login은 헤더 푸터 없이 이동할 수 있도록 다르게 연결 고민

const Body = () => {
    return (
    <BodyPage>
        Body 입니다.
    </BodyPage>
    )
}

const BodyPage = styled.div`
    height : 600px;
    border : 2px solid black;
`

export default Body;