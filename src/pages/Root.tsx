import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Root = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-4/5 h-full ">
        <Header />
        <div className="flex flex-row h-93">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
