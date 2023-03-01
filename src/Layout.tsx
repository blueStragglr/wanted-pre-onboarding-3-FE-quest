import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { Header } from "./components/@shared/Header";
import { Sidebar } from "./components/@shared/Sidebar";

export const Layout = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Sidebar
          navMenus={[
            { name: "page A", path: "page-a" },
            { name: "page B", path: "page-b" },
            { name: "page C", path: "page-c" },
          ]}
        />
        <Outlet />
      </S.Content>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
  `,
  Content: styled.div`
    display: flex;
    width: 100%;
    height: calc(100% - 80px);

    @media (max-width: 650px) {
      height: calc(100% - 60px);
    }
  `,
};
