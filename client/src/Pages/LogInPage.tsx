import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

type UserInfo = {
    id: string,
    password: string
};
const LogInPage =() => {

    const [userInfo,setUserInfo] = useState<UserInfo>({
        id: "",
        password: ""
    })
    const userInfoIdData=(id:string,pw:string)=>{
        setUserInfo({
            id: id,
            password: pw,
        })
    }

    const userId=(e:string)=>{

    }
    const userPw=(e:string)=>{

    }
    return(
    <div className="log_in_page">
        <Link to = "/"><img className="main_name" src={require('../images/ENTASIS.png')} alt='entasis' /></Link>

        <div className="log_in_page_wrapper">
            <div className="log_in_page_head">
                <h1>Log In</h1>
            </div>
            <div className="log_in_page_body">
                <div className="log_in_page_body_input">
                    <h1>ID</h1>
                    <input type="text" placeholder="ID" ></input>
                </div>
                <div className="log_in_page_body_input">
                    <h1>PW</h1>
                    <input type="password" placeholder="PW"></input>
                </div>
            </div>
            <div className="log_in_page_footer">
                <button ><h3>LogIn</h3></button>
                <Link to='/sign_up'><h3>Sign Up</h3></Link>
            </div>
        </div>
    </div>
    )
}
export default LogInPage;