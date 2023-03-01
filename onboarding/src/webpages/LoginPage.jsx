import styled from "styled-components";
import InputBase from "../components/InputBase";
import { useNavigate } from "react-router-dom";

const LoginDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8282FF;
`
const LoginTitle = styled.p`
    color: #F4FFFF;
    font-size: 3rem;
    font-weight: bold;
    margin: 0 0 30px 0;
`

const LoginButton = styled.button`
    font-size: 2rem;
    color: #fff;
    width: 300px;
    height: 50px;
    border: 0px;
    background-color: #B750EA;
    border-radius: 0.5rem;
    margin: 15px 0 0 10px;
    :active {
        background-color: #9932CC;
        border: 1px solid #BA55D3;
    }
`

const LoginPage = () => {
    const navigation = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const objectId =  { "id" : e.target[0].value , "login" : "ok" };
        sessionStorage.setItem("loginCheck", JSON.stringify(objectId));
        navigation(`/home`);
    }

    return (
        <LoginDiv>
            <LoginTitle>Login Page</LoginTitle>
            <form onSubmit={handleSubmit}>
                <InputBase types="text" names="loginId" content="ID" isFocus="true"></InputBase>
                <InputBase types="password" names="loginPw" content="PW" isFocus="false" ></InputBase>
                <LoginButton type="submit" value="Submit">Login</LoginButton>
            </form>
        </LoginDiv>
    );
}

export default LoginPage;