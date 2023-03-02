import React, { useContext } from "react";
import Layout from "../components/Layout";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user.isLogin) {
    return (
      <Layout>
        <h1>Profile</h1>
        {!user.isLogin && <div>로그인이 필요한 서비스 입니다</div>}
      </Layout>
    );
  }
  return (
    <Layout>
      <h1> {user.info.name}님의 프로필 페이지 입니다</h1>
    </Layout>
  );
};

export default Profile;
