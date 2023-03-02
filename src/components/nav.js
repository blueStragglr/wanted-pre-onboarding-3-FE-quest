import styled from 'styled-components';
import {  Link, useLocation } from 'react-router-dom'

const SNav = styled.nav`
  width: var(--spacing-xxxl);
  height: 90vh;
  padding: var(--spacing-xs);
  border-right: 1px solid var(--color-black);
  font-size: var(--text-md);
  font-weight: 900;
  & ul {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    width: 100%;
    height: 100%;
  }
`;

const SLink = styled(Link)`
	display: block;
  color: ${(props) => props.color || 'var(--color-black)'};
  &:hover {
    color: var(--color-blue);
  }
`;

export const Nav = () => {
  const location = useLocation();
  console.log('pathname : ', location.pathname.toUpperCase())
  const TAB_MENU = [
    {
      name: 'page A',
      to: '/A'
    },
    {
      name: 'page B',
      to: '/B'
    },
    {
      name: 'page C',
      to: '/C'
    },
  ]
  return (
    <SNav>
      <ul>
        {
          TAB_MENU.map((tab, index) => (
            <li key={index}>
              <SLink to={tab.to} color={location.pathname.toUpperCase() === tab.to ? 'var(--color-blue)' : ''}>
                {tab.name}
              </SLink>
            </li>
          ))
        }
      </ul>
    </SNav>
  )
}