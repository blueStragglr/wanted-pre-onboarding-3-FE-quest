import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { PAGE_LIST } from "../utils/Menu";

const PageLayout = () => {
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("isLogin") || ""
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isLogin");
    setIsLogin("");
  };

  return (
    <Layout>
      <Header>
        <Title onClick={() => navigate("/")}>
          Wonted Pre-onboarding course
        </Title>
        <LoginWrap>
          {isLogin ? (
            <User>{isLogin}님, 환영합니다.</User>
          ) : (
            <LogInOut onClick={() => navigate("/login")}>로그인 하기</LogInOut>
          )}
        </LoginWrap>
      </Header>

      <Contents>
        <Sidebar>
          <SidebarMenu>
            {PAGE_LIST.map((menu) => {
              return (
                <Menu key={menu.id} onClick={() => navigate(menu.path)}>
                  {menu.title}
                </Menu>
              );
            })}
          </SidebarMenu>
          <LogInOut onClick={handleLogout}>로그아웃</LogInOut>
        </Sidebar>
        <PageWrap>
          <Outlet />
        </PageWrap>
      </Contents>
    </Layout>
  );
};

const Layout = styled.section``;

const Header = styled.header`
  width: 100%;
  height: 90px;
  padding: 30px 60px;
  ${({ theme }) => theme.mixin.Flex("row", "space-between")};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

const Title = styled.h1`
  cursor: pointer;
`;

const LoginWrap = styled.div``;

const User = styled.p``;

const LogInOut = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.color.disabled};
`;

const Contents = styled.div`
  ${({ theme }) =>
    theme.mixin.Flex("row", "space-between", "flex-start", "30px")}
`;

const Sidebar = styled.article`
  width: max-content;
  ${({ theme }) =>
    theme.mixin.Flex("column", "space-between", "flex-start", "30px")}
  padding: 30px 60px;
  min-height: calc(100vh - 90px);
  border-right: 1px solid ${({ theme }) => theme.color.border};
  background-color: #fff;
`;

const SidebarMenu = styled.ul`
  margin-top: 30px;
  ${({ theme }) =>
    theme.mixin.Flex("column", "flex-start", "flex-start", "8px")};
`;
const Menu = styled.li`
  min-width: 100px;
  padding: 8px 0;
  background-color: #e9e9e9;
  cursor: pointer;
`;

const PageWrap = styled.div`
  width: 100%;
  padding: 60px 30px;
`;

export default PageLayout;
