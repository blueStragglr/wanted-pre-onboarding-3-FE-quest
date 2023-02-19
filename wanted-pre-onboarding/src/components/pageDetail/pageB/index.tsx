import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../common/header";
import SideBar from "../../common/sidebar";
import Layout from "../../layout";
import PageLayout from "../../layout/page";
import * as S from "./style";

function PageBDetail() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Layout>
        <SideBar currentPage="B" />
        <PageLayout>
          <S.PageText>This is Page {location.state.text}!</S.PageText>
        </PageLayout>
      </Layout>
    </>
  );
}

export default PageBDetail;
