import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100px;
  background-color: #f8f9fa;
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

  return (
    <SidebarContainer>
      <SidebarItem onClick={() => handleClick("/pageA")}>Page A</SidebarItem>
      <SidebarItem onClick={() => handleClick("/pageB")}>Page B</SidebarItem>
      <SidebarItem onClick={() => handleClick("/pageC")}>Page C</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
