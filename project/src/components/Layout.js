import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import { Outlet } from "react-router-dom";
import style from "styles/Layout.module.css";

export function Layout(props) {
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.main}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
