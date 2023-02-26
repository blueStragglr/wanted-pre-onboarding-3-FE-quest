import React from "react";
import './Main.css'
import Layout from "../../components/Layout";

const Main = ({ match }) => {
  return (
    <Layout>
      <main className="page_container">
        <h1 className="logo">메인 페이지입니다</h1>
      </main>
    </Layout>
  )
}

export default Main;