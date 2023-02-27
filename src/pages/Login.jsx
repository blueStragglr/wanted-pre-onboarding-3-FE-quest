import LoginPageStyle from "../styles/LoginPage";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return(
        <LoginPageStyle>
            <div className="title">Login</div>
            <input type="text" className="input" placeholder="아이디를 입력해주세요" />
            <input type="password" className="input" placeholder="비밀번호를 입력해주세요" />
            <div className="loginBtn" onClick={() => navigate('/')}>로그인</div>
        </LoginPageStyle>
    )
}

export default Login