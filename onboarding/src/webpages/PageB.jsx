import styled from "styled-components";

const PageDiv = styled.div`
    flex-grow: 1;
    display: flex;
    font-size: 2rem;
    height: calc(100% - 11%);
    color: #5050FF;
    background-color: #fff;
    align-items: center;
`

const PageContent = styled.p`
    flex-grow: 1;
    text-align: center;
`

const PageB = () => {
    return (
        <PageDiv>
            <PageContent>This is Page B!</PageContent>
        </PageDiv>
    );
}

export default PageB;