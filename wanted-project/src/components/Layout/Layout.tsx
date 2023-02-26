import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
