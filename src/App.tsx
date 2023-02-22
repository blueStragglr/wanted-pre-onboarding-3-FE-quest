import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  border-bottom: 1px black solid;
  box-sizing: border-box;
  height: 50px;
  padding: 15px;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: italic;
`;

const Box = styled.div`
  display: flex;
`;

const Nav = styled.div`
  width: 200px;
  height: 100%;
  border-right: 1px black solid;
`;

const Li = styled.li`
  list-style: none;
  a {
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <Header>Wanted Pre-onboarding course</Header>
      <Box>
        <Nav>
          <Li>
            <Link to={'/pageA'}>Page A</Link>
          </Li>
          <Li>
            <Link to={'/pageB'}>Page B</Link>
          </Li>
          <Li>
            <Link to={'/pageC'}>Page C</Link>
          </Li>
        </Nav>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
