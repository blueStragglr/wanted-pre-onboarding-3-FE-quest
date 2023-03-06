import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import * as S from "./style";

const LayoutContainer = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Sidebar />
        <S.ContentContainer>
          <Outlet />
        </S.ContentContainer>
      </S.Container>
    </>
  );
};

export default LayoutContainer;
