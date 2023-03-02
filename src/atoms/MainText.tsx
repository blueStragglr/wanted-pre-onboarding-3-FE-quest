import styled from 'styled-components';

export type MainTextPropsType = {
    content : string,
}

const StyledMainText = styled.span`
    font-size:36px;
    font-weight:bolder;
    color:skyblue;
`

export function MainText({content}:MainTextPropsType) {
    return(
        <StyledMainText>{content}</StyledMainText>
    )
}