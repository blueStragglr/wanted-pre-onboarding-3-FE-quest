import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import "./PageLayout.css";

const PageLayout = () => {
  return (
    <div className="root">
      <header className="header">this is header</header>
      <aside className="sidebar">
        <Nav />
      </aside>
      <article className="content">
        <Outlet />
      </article>
    </div>
  );
};

export default PageLayout;
