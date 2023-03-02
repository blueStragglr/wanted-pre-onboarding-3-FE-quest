import { SideLinkText } from "../atoms/SideLinkText";
import styled from 'styled-components';

export type ASidePropsType = {
    pageType? : string,
}

const StyledASide = styled.aside`
    width:10vw;
    height:93vh;
    border-right:1px solid lightgrey;

    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`;

export function ASide({pageType}: ASidePropsType) {
    return(
        <StyledASide>
            <SideLinkText content="Page A" url="/A" color={pageType === "A" ? "skyblue" : "black"}/>
            <SideLinkText content="Page B" url="/B" color={pageType === "B" ? "skyblue" : "black"}/>
            <SideLinkText content="Page C" url="/C" color={pageType === "C" ? "skyblue" : "black"}/>
        </StyledASide>
    )
}