/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import SideBar from "./SideBar";

interface PageTemplateProps {
  header: string;
  children: ReactNode;
}

function PageTemplate({ header, children }: PageTemplateProps) {
  return (
    <>
      <Header>{header}</Header>
      <div css={contentWrapperCss}>
        <SideBar />
        <Main>{children}</Main>
      </div>
    </>
  );
}

const Header = styled.div`
  font-size: 24px;
  font-weight: bolder;
  padding: 20px;
  border-bottom: 1px solid #000;
`;

const contentWrapperCss = css`
  display: flex;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100vh;
`;
export default PageTemplate;
