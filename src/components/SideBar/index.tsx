import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <StyledSideBar>
      <nav>
        <ul>
          <li>
            <Link to="/">PageA</Link>
          </li>
          <li>
            <Link to="/b">PageB</Link>
          </li>
          <li>
            <Link to="/c">Pagec</Link>
          </li>
        </ul>
      </nav>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  width: 15%;
  height: 100vh;
  border-right: 1px solid #757575;
`;

export default SideBar;
