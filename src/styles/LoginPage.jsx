import styled from "styled-components";

const LoginPageStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:10px;
    .title{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #5e77be;
    }
    .input{
        padding: 8px 10px;
        border: 1px solid #ddd;
        border-radius: 20px;
        outline: none;
        min-width:250px;

        ::placeholder{
            color: #ccc;
        }
    }
    .loginBtn{
        width: 250px;
        padding: 10px 0;
        border-radius: 20px;
        background: #6d86cc;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;

        &:hover{
            background: #5e77be;
        }
    }
`

export default LoginPageStyle;