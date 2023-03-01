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

const PageC = () => {
    return (
        <PageDiv>
            <PageContent>This is Page C!</PageContent>
        </PageDiv>
    );
}

export default PageC;