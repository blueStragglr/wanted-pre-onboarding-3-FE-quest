import React, { useContext } from "react";
import Layout from "../components/Layout";
import { UserContext } from "../context/userContext";

const Todo = () => {
  const { user } = useContext(UserContext);
  if (!user.isLogin) {
    return (
      <Layout>
        <h1>Todo</h1>
        {!user.isLogin && <div>로그인이 필요한 서비스 입니다</div>}
      </Layout>
    );
  }
  return (
    <Layout>
      <h1>{user.info.name}님의 할일 계획 세우기</h1>
    </Layout>
  );
};

export default Todo;
