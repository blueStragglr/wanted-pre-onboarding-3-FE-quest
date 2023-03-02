import { Link } from "react-router-dom";

const Header =() => {

    return(
    <div className="header">
        <Link to = "/"><img src={require('../images/logo.png')} alt='logo'/></Link>
        
        <Link to = "/"><img className="main_name" src={require('../images/ENTASIS.png')} alt='entasis' /></Link>

        <div className="user_state">
            <Link to = "/log_in"><h3>Log In</h3></Link>
            <Link to = "/sign_up"><h3>Sign Up</h3></Link>
            <Link to = "/"><img src={require('../images/none_user.png')} alt='user' width="40px"/></Link>
        </div>
    </div>
    )
}
export default Header;