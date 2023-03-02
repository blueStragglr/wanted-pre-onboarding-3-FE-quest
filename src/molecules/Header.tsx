import styled from "styled-components";
import { HeadingText } from "../atoms/HeadingText";

const StyledHeader = styled.header`
    width:100vw;
    height:7vh;
    
    display:flex;
    flex-direction:row;
    align-items:center;

    border-bottom:1px solid lightgrey;
`;

export function Header() {
    return(
        <StyledHeader>
            <HeadingText content="Wanted Pre-onBoarding course" margin={{marginLeft : '30px'}} />
        </StyledHeader>
    )
}