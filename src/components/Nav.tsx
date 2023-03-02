import { Link } from "react-router-dom";
import { links } from "../links";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.name} className="nav-list-item">
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
