import React, { ReactNode } from "react";
import styled from "styled-components";

import Header from "./Header";
import SideBar from "./SideBar";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <LayoutWrap>
      <Header />
      <LayoutInner>
        <SideBar />
        <PageContent>{children}</PageContent>
      </LayoutInner>
    </LayoutWrap>
  );
}

const LayoutWrap = styled.div``;

const LayoutInner = styled.div`
  display: flex;
  padding: 0 1rem;
`;

const PageContent = styled.div`
  width: calc(100% - 300px);
`;

export default Layout;
