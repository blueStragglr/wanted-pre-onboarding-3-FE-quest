import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: white;
  border-right: 1px solid gray;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;

  &:hover {
    color: #639ec3;
  }
`;

export const SidebarItem = styled.div`
  transition: transform 0.3s ease-in-out;
  transform-origin: left;
  padding-top: 30px;
  padding-left: 50px;
  font-size: 20px;

  &:hover {
    transform: scale(1.1);
    color: #639ec3;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a.selected {
    color: #639ec3;
  }
`;

export const AuthHover = styled.a`
  color: black;

  &:hover {
    color: #639ec3;
  }
`;
