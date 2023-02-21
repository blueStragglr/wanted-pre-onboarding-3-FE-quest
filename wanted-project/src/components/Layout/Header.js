import './Header.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("id");
        navigate("/");
    };
    return (
        <header>
            <h2 className='header'>Wanted Pre-onboarding course
                {localStorage.id ? <Link className='login' style={{ textDecoration: "none" }} onClick={handleLogout}>Logout</Link> : <Link className='login' to="/login" style={{ textDecoration: "none" }}>Login</Link>}

            </h2>

        </header>
    )
}

export default Header;