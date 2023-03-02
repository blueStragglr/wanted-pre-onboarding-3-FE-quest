import './Lgoin.scss';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const Login = () => {
    const navigate = useNavigate();

    // 로그인은 간단하게 아이디만 입력하면 넘어 갈 수 있도록 했습니다.
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    };
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPw(e.target.value);
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id === "" || pw ==="") {
            alert("아이디및 비밀번호를 입력해주세요.");
            return;
        }
        localStorage.setItem("id", id);
        navigate("/");
    };
    return(<section id={`login-page`}>
        <div className={'wrapper'}>
            <span>Login</span>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="id"
                    value={id}
                    placeholder="아이디"
                    onChange={handleChangeId}
                />
                <input  type="password"
                        name="pw"
                        value={pw}
                        placeholder="비밀번호"
                        onChange={handleChangePassword}/>
                <button type="submit">로그인</button>
            </form>
        </div>


    </section>)
}

export default Login;
