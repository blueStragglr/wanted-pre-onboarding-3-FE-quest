import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    height: max-content;
`

export const Item = styled.button<{isActive : boolean}>`
    background-color: inherit;
    padding: 15px;
    font-weight: bold;
    color: ${({isActive, theme}) => isActive ? 'blue' : theme.textColor};
    font-size: 24px;
    span{
        cursor: pointer;
    }
    span:first-child{
        margin-right: 10px;
    }
`

export const Line = styled.hr`
    margin-top: 0px;
`