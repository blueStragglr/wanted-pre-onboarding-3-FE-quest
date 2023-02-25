import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const loginAllowUser = {
    email : 'test123@google.com',
    pw : 'abc1234@@'
}

function Login () {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if(regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const IsloginSuccess = () => {
        if(email === loginAllowUser.email && pw === loginAllowUser.pw) {
            alert('로그인성공');
            navigate('/page');
        } else {
            alert('등록되지 않은 회원입니다.')
        }
    }

    useEffect(() => {
        if(emailValid&&pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid,pwValid])

    return (
        <div className="loginPage">
            <div className="titleWrap">
                이메일과 비밀번호를 입력해주세요.
            </div>
            <div className="contentWrap">
                <div className="inputTitle">
                    이메일 주소
                </div>
                <div className="inputWrap">
                    <input value={email} placeholder="test@naver.com" className="input" type="text" onChange={handleEmail} />
                </div>
                <div className="inputError">
                    {
                        !emailValid && email.length > 0 && (
                            <div>올바른 이메일을 입력해주세요</div>
                        )
                    }
                </div>
                <div className="inputTitle">
                    비밀번호를 입력해주세요
                </div>
                <div className="inputWrap">
                    <input value={pw} placeholder="영문, 숫자, 특수문자 포함 8자 이상을 입력해주세요" className="input" type="password" onChange={handlePw} />
                </div>
                <div className="inputError">
                    {
                        !pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상을 입력해주세요</div>
                        )
                    }
                </div>
            </div>
            <div className="buttonWrap">
                    <button onClick={IsloginSuccess} disabled={notAllow} className="btn">확인</button>
            </div>
        </div>
    )
}

export default Login;