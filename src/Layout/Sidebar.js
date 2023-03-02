import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/pageA">Page A</NavLink></li>
                <li><NavLink to="/pageB">Page B</NavLink></li>
                <li><NavLink to="/pageC">Page C</NavLink></li>
            </ul>
        </nav>
    )
}

export default Sidebar;