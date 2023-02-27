import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    font-size: 18px;
    font-weight: 600;
`

export const StyledSideBar = styled.div`
    width: 200px;
    border-right: 1px solid #ccc;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    li{
        list-style: none;
        font-size: 14px;
        transition: 0.2s;
        cursor: pointer;
        &:hover{
            opacity: 0.7;
        }
    }
`

export const StyledLayout = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .main-box{
        width: 100%;
        height: calc(100% - 60px);
        display: flex;
        .main{
            width: calc(100% - 200px);
            height: 100%;
            padding: 20px;
            color: #4a90fa;
            font-size: 18px;
            font-weight: 600;
        }
    }
`