import { ReactNode } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import * as S from "./style";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <S.Wrapper>
      <Header />

      <S.Content>
        <Sidebar />

        {children}
      </S.Content>
    </S.Wrapper>
  );
};

export default MainLayout;
