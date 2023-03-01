import "../styles/components/layout.css";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Navigator } from "./navigator";

export const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div className="content">
        <Navigator />
        <div className="page_container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
