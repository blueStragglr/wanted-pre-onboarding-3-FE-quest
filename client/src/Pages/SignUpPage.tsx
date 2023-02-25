import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import AssetWrapper from "../Wrapper/AssetWrapper";
import HistoryWrapper from "../Wrapper/HistoryWrapper";

const SignUpPage =() => {

    return(
    <div className="sign_up_page">
        <Link to = "/"><img className="main_name" src={require('../images/ENTASIS.png')} alt='entasis' /></Link>
        <div className="sign_up_page_wrapper">
            <div className="sign_up_page_head">
                <h1>Sign Up</h1>
            </div>
            <div className="sign_up_page_body">
                <div className="sign_up_page_body_input">
                    <h1>ID</h1>
                    <input type="text" placeholder="ID"></input>
                </div>
                <div className="sign_up_page_body_input">
                    <h1>PW</h1>
                    <input type="password" placeholder="PW"></input>
                </div>
                <div className="sign_up_page_body_input">
                    <h5>PW Check</h5>
                    <input type="password" placeholder="PW"></input>
                </div>

            </div>
            <div className="sign_up_page_footer">
                <button><h3>Sign Up</h3></button>
                <Link to='/log_in'><h3>LogIn</h3></Link>
            </div>
        </div> 
        <Footer/>
    </div>
    )
}
export default SignUpPage;