import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    button{
        background-color: blue;
        padding: 15px;
        border-radius: 15px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
`

export const Title = styled.span`
    font-size: 24px;
    font-weight: bold;
`

export const Line = styled.hr`
    margin-bottom: 0px;
`