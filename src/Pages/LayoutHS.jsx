import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import LayoutContainer from "../Components/LayoutContainer/LayoutContainer";
import PageContainer from "../Components/PageContainer/PageContainer";
import Sidebar from "../Components/Sidebar/Sidebar";

const LayoutHS = () => {
  return (
    <>
      <Header />
      <Sidebar />

      <LayoutContainer>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </LayoutContainer>
    </>
  );
};

export default LayoutHS;
