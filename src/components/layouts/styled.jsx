import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    .title{
        font-size: 18px;
        font-weight: 600;
    }
    .user-box{
        display: flex;
        gap: 10px;
        align-items: center;
        .btn{
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 14px;
            background: #ddd;
            cursor: pointer;
            transition: 0.2s;
            &:hover{
                background: #bbb;
            }
        }
    }
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