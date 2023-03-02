import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        id: "",
        pw: "",
    });

    const onChangeLoginInput = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        //TODO: 비동기 처리
        navigate("/post");
    };

    return (
        <LoginWrapper>
            <LoginBox onSubmit={onSubmit}>
                <LoginInput
                    name="id"
                    placeholder="아이디"
                    onChange={onChangeLoginInput}
                />
                <LoginInput
                    name="pw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={onChangeLoginInput}
                />
                <LoginBtn>로그인</LoginBtn>
            </LoginBox>
        </LoginWrapper>
    );
};

export default Login;

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const LoginBox = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30rem;
    height: 20rem;
    border: 1px solid black;
`;

const LoginInput = styled.input`
    width: 50%;
    height: 2rem;
    margin-bottom: 1rem;
`;

const LoginBtn = styled.button`
    width: 50%;
    height: 2rem;
    outline: none;
`;
