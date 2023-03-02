import './Header.scss';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem("id");
        navigate("/");
    }
    return (<header>wanted Pre-onboarding course
        <button onClick={handleLogout}>로그아웃</button>
    </header>)
}

export default Header