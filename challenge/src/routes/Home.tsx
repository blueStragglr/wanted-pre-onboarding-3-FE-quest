import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex pt-20">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}
