import SideNavigator from "./LayoutMain.SideNavigator";
import TopNavigator from "./LayoutMain.Header";
import { json, Outlet } from "react-router-dom";

import { storage } from "../utils/storage";

export const loaderAuth = () => {
  const isAuth = storage.get("ACCESS_TOKEN");

  if (!isAuth) {
    throw json("", { status: 401 });
  }

  return json("", { status: 200 });
};

export default function LayoutMain() {
  return (
    <>
      <TopNavigator />
      <div>
        <SideNavigator />
        <Outlet />
      </div>
    </>
  );
}
