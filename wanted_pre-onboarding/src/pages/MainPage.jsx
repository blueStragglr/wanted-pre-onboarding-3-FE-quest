import React from "react";
import style from "styled-components";
import Navbar from "../molecules/Navbar";
import PageContent from "../molecules/PageContent";
import Paginator from "../molecules/Paginator";

const MainBox = style.div`
  width: 100%;
  min-width: 934px;
  min-height: 100vh;
  padding: 10px 116px;
  border: 1px solid red;
`;

const ContentArea = style.div`
  max-width: 1280px;
  height: 100%;
  margin: auto;
  background-color: white;
`;

const MainPage = () => {
  return (
    <MainBox>
      <ContentArea>
        <Navbar />
        <div className="flex flex-row w-full h-full">
          <Paginator />
          <PageContent />
        </div>
      </ContentArea>
    </MainBox>
  );
};

export default MainPage;
