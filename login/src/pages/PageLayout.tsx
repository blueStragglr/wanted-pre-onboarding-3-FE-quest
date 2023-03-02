import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { PAGE_LIST } from "../utils/Menu";

const PageLayout = () => {
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("isLogin") || ""
  );

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      sessionStorage.removeItem("isLogin");
      setIsLogin("");
      navigate("/");
    }
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
            <LogIn onClick={() => navigate("/login")}>로그인 하기</LogIn>
          )}
        </LoginWrap>
      </Header>

      <Contents>
        <Sidebar>
          <SidebarMenu>
            {PAGE_LIST.map((menu) => {
              return (
                <Menu
                  key={menu.id}
                  nowPage={menu.path === pathname}
                  onClick={() => navigate(menu.path)}
                >
                  {menu.title}
                </Menu>
              );
            })}
          </SidebarMenu>
          {isLogin && <LogOut onClick={handleLogout}>로그아웃</LogOut>}
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
  padding: 30px 40px;
  ${({ theme }) => theme.mixin.Flex("row", "space-between")};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.point_blue};
  cursor: pointer;
`;

const LoginWrap = styled.div``;

const User = styled.p``;

const LogIn = styled.button`
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
  min-height: calc(100vh - 90px);
  border-right: 1px solid ${({ theme }) => theme.color.border};
  background-color: #fff;
`;

const SidebarMenu = styled.ul`
  ${({ theme }) => theme.mixin.Flex("column", "flex-start", "flex-start")};
`;

interface MenuStyleProps {
  nowPage: boolean;
}

const Menu = styled.li<MenuStyleProps>`
  min-width: 150px;
  padding: 12px 40px;
  cursor: pointer;
  white-space: nowrap;

  ${({ nowPage, theme }) => {
    if (nowPage) {
      return css`
        background-color: ${theme.color.point_blue};
        color: #fff;
      `;
    } else {
      return css`
        :hover {
          background-color: #e9e9e9;
        }
      `;
    }
  }}
`;

const LogOut = styled.button`
  width: 100%;
  height: 50px;
  ${({ theme }) => theme.mixin.Flex()}
  font-size: 14px;
  color: ${({ theme }) => theme.color.disabled};
  background-color: ${({ theme }) => theme.color.border};
`;

const PageWrap = styled.div`
  width: 100%;
  padding: 60px 30px;
`;

export default PageLayout;
