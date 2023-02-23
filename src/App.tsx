import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  height: 100vh;
  border-bottom: 1px black solid;
  box-sizing: border-box;
  height: 6vh;
  padding: 15px;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-style: italic;
`;

const Box = styled.div`
  height: 94vh;
  display: flex;
`;

const Nav = styled.div`
  width: 200px;

  border-right: 1px black solid;
  text-align: center;
  padding-top: 20px;
`;

const Li = styled.li`
  list-style: none;
  margin: 15px 0;
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
