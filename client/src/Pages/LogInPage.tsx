import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

type UserInfo = {
    id: any,
    password: any
};
const LogInPage: React.FC =() => {

    const [userData,setUserData] = useState<UserInfo>({
        id: "",
        password: ""
    })

    useEffect(()=>{
        // console.log(userData.id)
        // console.log(userData.password)

    },[userData])

    const userInfo=(id:any,password:any)=>{
        setUserData({
            "id": id.target.value,
            "password": password.target.value
        })
        console.log(id.target.value)
        console.log(password.target.value)

    }
    const handleSubmit=(e:any)=>{
        e.preventDefault();
    }
    return(
    <div className="log_in_page">
        <Link to = "/"><img className="main_name" src={require('../images/ENTASIS.png')} alt='entasis' /></Link>
        <form className="log_in_page_wrapper" onSubmit={handleSubmit}>
            <div className="log_in_page_head">
                <h1>Log In</h1>
            </div>
            <div className="log_in_page_body">
                <div className="log_in_page_body_input">
                    <h1>ID</h1>
                    <input type="text" placeholder="ID" onChange={(id)=>userInfo(id,userData.password)} defaultValue=""></input>
                </div>
                <div className="log_in_page_body_input">
                    <h1>PW</h1>
                    <input type="password" placeholder="PW" onChange={(password)=>userInfo(userData.id,password)} defaultValue=""></input>
                </div>
            </div>
            <div className="log_in_page_footer">
                <button ><h3>LogIn</h3></button>
                <Link to='/sign_up'><h3>Sign Up</h3></Link>
            </div>
        </form>
    </div>
    )
}
export default LogInPage;