import styled from "styled-components";

const Title = styled.h2`
    height:50px;
    border-bottom:solid 1px lightgrey;
    margin:0;
    padding:0 10px;
    display:flex;
    align-items:center;
`

function Header() {
    return (
        <Title>Header</Title>
    );
}

export default Header;