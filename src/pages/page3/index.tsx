import React from "react";
import SideNavigation from "../../components/Navigation/SideNavigation";
import TopNavigation from "../../components/Navigation/TopNavigation";
import * as S from "./styled";

export default function ThirdPage() {
  return (
    <>
      <TopNavigation />

      <S.Layout>
        <SideNavigation />
        <S.TempTypo>page3</S.TempTypo>
      </S.Layout>
    </>
  );
}
