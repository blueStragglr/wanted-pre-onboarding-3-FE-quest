import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

const PageLayoutContainer = styled.div`
  .page-layout {
    display: flex;
  }
`;

const PageLayoutView = () => {
  return (
    <PageLayoutContainer>
      <Header />
      <div className="page-layout">
        <Nav />
        <Outlet />
      </div>
    </PageLayoutContainer>
  );
};

export default PageLayoutView;
