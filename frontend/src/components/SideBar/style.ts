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
    color: ${({isActive}) => isActive ? 'blue' : 'black'};
`

export const Line = styled.hr`
    margin-top: 0px;
`