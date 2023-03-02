import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../atoms";
import { Button } from "./Button";

export const Sidebar = ({ navMenus }: SidebarProps) => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  const handleClickMenu = (path: string) => () => {
    setSidebar(path);
    navigate("/" + path);
  };

  return (
    <S.Sidebar>
      {navMenus.map((menu) => (
        <S.Menu
          key={menu.name}
          isSelect={sidebar === menu.path}
          onClick={handleClickMenu(menu.path)}
          buttonText={menu.name}
        />
      ))}
    </S.Sidebar>
  );
};

interface SidebarProps {
  navMenus: { name: string; path: string }[];
}

const S = {
  Sidebar: styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2x0px;
    width: 200px;
    height: 100%;
    padding: 20px;
    border-right: 1px solid #e5e5e5;
  `,

  Menu: styled(Button)<{ isSelect: boolean }>`
    font-size: 24px;
    color: ${({ isSelect }) => (isSelect ? "#000" : "#999")};

    @media (max-width: 650px) {
      font-size: 20px;
    }

    @media (max-width: 550px) {
      font-size: 16px;
    }

    @media (max-width: 460px) {
      font-size: 14px;
    }
  `,
};
