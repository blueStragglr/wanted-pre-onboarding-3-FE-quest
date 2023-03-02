import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 30px;
`

export const LoginBox = styled.div`
    width: 50%;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: blue;
`

export const SubTitle = styled.span`
    font-size: 18px;
    font-weight: bold;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;

    input{
        margin-bottom: 10px;
    }

    button{
        background-color: blue;
        padding: 10px 15px;
        border-radius: 15px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
`