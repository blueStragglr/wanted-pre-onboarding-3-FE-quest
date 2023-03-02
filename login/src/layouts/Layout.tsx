import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Layout(): JSX.Element {
  return (
    <LayoutStyle>
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      <SideBarOutletWrapper>
        <SideBar />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </SideBarOutletWrapper>
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStyle = styled.div`
  height: 10vh;
`;

const SideBarOutletWrapper = styled.div`
  height: 90vh;
  display: flex;

  > nav {
    width: 20vw;
    height: 100%;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  > main {
    width: 80vw;
    height: 100%;
  }
`;

const OutletWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
