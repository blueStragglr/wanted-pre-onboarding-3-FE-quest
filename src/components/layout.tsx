import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Navigator } from "./navigator";

export const Layout = (): React.ReactElement => {
  return (
    <>
      <Header />
      <div>
        <Navigator />
        <Outlet />
      </div>
    </>
  );
};
