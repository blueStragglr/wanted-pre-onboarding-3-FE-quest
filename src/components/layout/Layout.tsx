import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const location = useLocation();

  const currentRoute = location.pathname === "/signin";

  return (
    <>
      {!currentRoute ? <NavigationBar /> : null}
      <main className="h-screen flex">
        {!currentRoute ? <Sidebar /> : null}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
