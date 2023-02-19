import React from "react";
import * as S from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return <S.Layout>{props.children}</S.Layout>;
}

export default Layout;
