import React from "react";
import { useContext } from "react";
import Layout from "../components/Layout";
import { UserContext } from "../context/userContext";

const Main = () => {
  const { user } = useContext(UserContext);
  if (!user.isLogin) {
    return (
      <Layout>
        <h1>Main</h1>
        {!user.isLogin && <div>로그인이 필요한 서비스 입니다</div>}
      </Layout>
    );
  }
  return (
    <Layout>
      <h1> {user.info.name}님 안녕하세요!</h1>
    </Layout>
  );
};

export default Main;
