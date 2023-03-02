import { Outlet } from "react-router-dom";
import "./Root.css";

const links = [
  { name: "turtle page", path: "/a" },
  { name: "page b", path: "/b" },
  { name: "page c", path: "/c" },
];

const root = () => {
  return (
    <div className="root">
      <header className="header">this is header</header>
      <aside className="sidebar">
        <nav className="nav">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.name} className="nav-list-item">
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <article className="content">
        <Outlet />
      </article>
    </div>
  );
};

export default root;
