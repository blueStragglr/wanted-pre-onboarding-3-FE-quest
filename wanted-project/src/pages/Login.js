import './page.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleInputText = (e) => {
        setId(e.target.value);
        setPw(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (id === "") {
            alert("아이디를 입력해주세요.");
            return;
        }

        if (pw === "") {
            alert("비밀번호를 입력해주세요.");
            return;
        }
        localStorage.setItem("id", id);
        localStorage.setItem("pw", pw);

        navigate("/");
    };
    return (
        <div>
            <h3 className="name">Login</h3>
            <form className="login-form" method="post" onSubmit={handleLogin}>
                <label className="legend">아이디</label>
                <input name="id" type="text" vlaue={id} onChange={handleInputText} />
                <label className="legend">패스워드</label>
                <input name="pw" type="password" vlaue={pw} onChange={handleInputText} />
                {/* <input className='btn' type="button" value="로그인" /> */}
                <div className="find-btn">
                    <button type="submit" className="btn btn-navy navbar-btn find-btn1">로그인</button>
                </div>
            </form>
        </div>
    )
}

export default Login;