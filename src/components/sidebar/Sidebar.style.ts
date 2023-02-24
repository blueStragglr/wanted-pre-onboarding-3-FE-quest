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
  color: black;
  text-decoration: none;

  &:hover {
    color: #639ec3;
    text-decoration: none;
  }

  &:active {
    color: green;
    text-decoration: none;
  }
`;

export const SidebarItem = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  transition: transform 0.3s ease-in-out;
  transform-origin: left;

  &:hover {
    transform: scale(1.1);
  }
`;
