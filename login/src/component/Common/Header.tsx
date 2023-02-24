import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className='headContainer'>
            <Link style={{ textDecoration: "none" }} to={"/"}>
                <h1 className='headLogo'>ONEMOREBOTTLEE</h1></Link>
            <div className='login'>
                <a className='loginBtn' href="/login" data-text="Login">Login</a>
            </div>
        </div>
    )
}