import styled from "styled-components"

export type SideLinkTextPropsType = {
    content : string,
    url: string,
    color : string
}

const StyledA = styled.a`
  text-decoration:none;  
  margin-top:30px;
`;

export function SideLinkText({content, url, color}:SideLinkTextPropsType) {
    return(
        <StyledA href={url} style={{color:color}}>{content}</StyledA>
    )
}