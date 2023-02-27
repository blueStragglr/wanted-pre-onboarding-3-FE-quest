import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Page {
  path: string;
  label: string;
  requireAuth: boolean;
}

const pages: Page[] = [
  { path: "/pageA", label: "Page A", requireAuth: true },
  { path: "/pageB", label: "Page B", requireAuth: false },
  { path: "/pageC", label: "Page C", requireAuth: true },
];

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: white;
  border-right: 1px solid gray;
`;

const SidebarItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }
`;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const isLoggedIn = true; // 로그인 여부에 따라 수정

  return (
    <SidebarContainer>
      {pages.map((page) => {
        if (!page.requireAuth || isLoggedIn) {
          return (
            <SidebarItem key={page.path} onClick={() => handleClick(page.path)}>
              {page.label}
            </SidebarItem>
          );
        }
        return null;
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
