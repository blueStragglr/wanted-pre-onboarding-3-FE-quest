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
        <SideBar pages={["B", "C", "is not exist", "Protect"]} />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </SideBarOutletWrapper>
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeaderStyle = styled.div`
  height: 10%;
`;

const SideBarOutletWrapper = styled.div`
  height: 90%;
  display: flex;

  > nav {
    width: 20%;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  > main {
    width: 80%;
  }
`;

const OutletWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
