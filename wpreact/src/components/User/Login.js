import React from "react";
import styled from 'styled-components';

const Login = () => {
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
                <button>회원가입</button>
            </div>
        </LoginSC>
    )
}

const InputSC = styled.div`
    height : 3em;
    vertical-aligh : middle;
`

const LoginSC = styled.div`
    margin-left : 40%
`

export default Login;