import React from "react";
import styled from 'styled-components';

const Login = () => {

    // Status를 삭제 후 메인페이지로 보내기
    const AfterLogin = () => {
        localStorage.removeItem('Status')
        window.location.href = '/'
    }

    return(
        <LoginSC>
            <InputSC>
                <div>
                    <input></input>
                </div>
                <div>
                    <input></input>
                </div>
            </InputSC>
            <div>
                <button>로그인</button>
                <button onClick = {AfterLogin}>뒤로가기</button>
            </div>
        </LoginSC>
    )
}

const InputSC = styled.div`
    height : 3em;
    vertical-aligh : middle;
`

const LoginSC = styled.div`
    margin : 10em;
    margin-left : 40%;
`

export default Login;