import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    height: 7vh;
    font-size: 24px;
    font-family: sans-serif;
    font-style: italic;
    font-weight: 600;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    a{
        padding-left: 20px;
    }
`

const Header = ()=>{
    return(
        <Container>
            <Link to="/">Wanted Pre-onboarding course</Link>
        </Container>
    )
}

export default Header;