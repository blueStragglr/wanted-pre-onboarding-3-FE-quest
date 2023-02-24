import { Outlet } from "react-router-dom";

import LayoutContainer from "../Components/LayoutContainer/LayoutContainer";
import PageContainer from "../Components/PageContainer/PageContainer";

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  );
};

export default Layout;
