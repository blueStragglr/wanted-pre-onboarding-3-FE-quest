import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

export const DefaultLayout = () => {
  return (
    <>
      <LayoutGrid>
        <Header />
        <LayoutWrap>
          <Navigation />
          <InnerWrap>
            <Outlet />
          </InnerWrap>
        </LayoutWrap>
      </LayoutGrid>
    </>
  );
};

const LayoutGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: 100%;
  background-color: #ccc;
`;
const LayoutWrap = styled.div`
  width: 100%;
  display: flex;
`;

const InnerWrap = styled.div`
  width: 100%;
`;
