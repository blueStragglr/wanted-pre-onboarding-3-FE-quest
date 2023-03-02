import styled from "styled-components";
import { HeadingText } from "../atoms/HeadingText";

const StyledHeader = styled.header`
    height:7vh;
    padding-left:30px;
    
    display:flex;
    flex-direction:row;
    align-items:center;

    border-bottom:1px solid lightgrey;
`;

export function Header() {
    return(
        <StyledHeader>
            <HeadingText content="Wanted Pre-onBoarding course" />
        </StyledHeader>
    )
}