import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

type ActiveNav = {
  active: boolean;
}

const NavItemStyle = styled.li<ActiveNav>`
  text-align: center;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #2f5fef;
    font-weight: bold;
  }

  a {
    padding: 1.5rem;
    ${props => props.active &&
      css`
        color: #2f5fef;
        font-weight: bold;
      `}
  }
`

interface NavItemProps {
  path: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ path, label }) => {
  return (
    <NavItemStyle active={useMatch(path) ? true : false}>
      <Link to={path}>{label}</Link>
    </NavItemStyle>
  )
}

export default NavItem;