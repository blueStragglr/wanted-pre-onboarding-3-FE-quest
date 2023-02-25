import React from "react";
import * as S from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

function PageLayout(props: LayoutProps) {
  return <S.PageLayout>{props.children}</S.PageLayout>;
}

export default PageLayout;
