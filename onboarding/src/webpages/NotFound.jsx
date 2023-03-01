import styled from "styled-components";

const NotFoundComp = styled.p`
    padding: 0 0 0 40px;
    font-size: 3rem;
    background-color: #fff
`

const NotFound = () => {
    return (
        <NotFoundComp>404 Not Found</NotFoundComp>
    )
}

export default NotFound;