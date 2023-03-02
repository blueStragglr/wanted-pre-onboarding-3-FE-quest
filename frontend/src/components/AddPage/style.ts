import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 70%;
    padding: 15px;
`

export const Input = styled.input`
    margin-bottom: 10px;
`

export const Button = styled.button`
    background-color: blue;
    padding: 10px;
    color: white;
    font-weight: bold;
    width: 50%;
    margin: 0 auto;
    border-radius: 15px;
`

export const ErrMsg = styled.span`
    font-size: 16px;
    color: red;
    font-weight: bold;
    text-align: center;
`