import styled from "styled-components";

const Headers = styled.header`
    background-color: white;
    border-bottom: solid 3px lightgray;
    width: 100%;
    height: 70px;
`;

const HomeTitle = styled.h1`
    line-height: 300%;
    padding: 0 0 0 2vw;
    font-size: 1.5em;
    height: 100%;
    color: black;
`;

const HeaderComp = () => {
    return (
        <Headers>
            <HomeTitle>Wanted Pre-onboarding course</HomeTitle>
        </Headers>
    )
}

export default HeaderComp;