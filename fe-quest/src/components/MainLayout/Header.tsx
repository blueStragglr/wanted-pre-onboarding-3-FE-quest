import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { headerStyle, signInButtonStyle } from "./Header.styles";

function Header() {
    return (
        <div className={headerStyle}>
            Wanted Pre-onboarding cource
            <Link to="/login" className={signInButtonStyle}>Sign In <FontAwesomeIcon icon={faRightToBracket} /></Link>
        </div>
    );
}

export default Header;