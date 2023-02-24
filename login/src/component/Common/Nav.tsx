import { Link } from "react-router-dom"

export const Nav = () => {
    return (
    <div className="navBody">
        <div className="navItem"><Link to="page1">Page 1</Link></div>
        <div className="navItem"><Link to="page2">Page 2</Link></div>
        <div className="navItem"><Link to="page3">Page 3</Link></div>
        <div className="navItem"><Link to="page4">Page 4</Link></div>
    </div>
    )
}