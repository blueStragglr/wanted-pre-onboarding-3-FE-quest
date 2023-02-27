import { Outlet } from "react-router-dom";
import { Header } from "./components/@shared/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
