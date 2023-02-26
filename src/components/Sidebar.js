import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const userLoggedIn = localStorage.getItem('email');

  useEffect(() => {}, [userLoggedIn]);

  return (
    <SidebarContainer>
      <MenuWrapper>
        <ul>
          {MENU_LISTS.map((list) => {
            const { menu_id, menu_title, menu_navigate } = list;
            return (
              <Link className="navigate" to={`${menu_navigate}`}>
                <li key={menu_id}>{menu_title}</li>
              </Link>
            );
          })}
          {userLoggedIn && (
            <Link className="navigate" to="/mypage">
              <li> Mypage </li>
            </Link>
          )}
        </ul>
      </MenuWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 600;

  ul li {
    margin-bottom: 2rem;

    &:hover {
      cursor: pointer;
      color: orange;
    }
  }

  .navigate {
    text-decoration: none;
  }
`;

const SidebarContainer = styled.article`
  width: 20%;
  height: 100%;
  background-color: #eee;

  padding: 2rem;
`;

const MENU_LISTS = [
  {
    menu_id: 1,
    menu_title: 'PAGE_A',
    menu_navigate: '',
  },
  {
    menu_id: 2,
    menu_title: 'PAGE_B',
    menu_navigate: '/b',
  },
  {
    menu_id: 3,
    menu_title: 'PAGE_C',
    menu_navigate: '/c',
  },
];
