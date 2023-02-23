import React from "react";
import * as S from "./styled";

export default function SideNavigation() {
  return (
    <S.Layout>
      <S.Navigation to="/page1">Page 1</S.Navigation>
      <S.Navigation to="/page2">Page 2</S.Navigation>
      <S.Navigation to="/page3">Page 3</S.Navigation>
    </S.Layout>
  );
}
