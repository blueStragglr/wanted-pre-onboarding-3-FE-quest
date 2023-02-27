import { StyledHeader } from "./styled";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return(
        <StyledHeader>
            <div className="title">
                Wanted Pre-onboarding course
            </div>
            <div className="user-box">
                    Login success.
                <div className="btn" onClick={() => navigate('/login')}>logout</div>
            </div>
        </StyledHeader>
    )
}

export default Header;