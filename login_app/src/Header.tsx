import './header.css'
import { useLocation } from 'react-router-dom'

function Header() {
    const location = useLocation()

    if(location.pathname === "/login") return null
    return (
        <div className="header__wrap">
            Login Application
        </div>
    )
}

export {Header}