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
  height: calc(100vh - 70px);
  border-right: 1px solid #757575;
  > nav > ul {
    padding: 20px;
    > li {
      margin-bottom: 10px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default SideBar;
