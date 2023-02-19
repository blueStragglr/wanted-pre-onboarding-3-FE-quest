import { Link, Outlet } from "react-router-dom";

import styled from "styled-components";

import { useAuthContext } from "@/Context/AuthContextProvider";
import { routes } from "@/Routers/routes";

const MainLayout = () => {
  const {
    state: { isLogin }
  } = useAuthContext();
  return (
    <Container>
      <Header>
        <h1>안녕~ 레이아웃은 처음이지?</h1>
        {isLogin && <Link to="/logout">로그아웃</Link>}
      </Header>
      <ContentContainer>
        <Nav>
          {routes.public.map((route) =>
            route.subPage?.map((value) => (
              <Link
                key={value.id}
                to={value.pathname}
              >
                {value.pageName}
              </Link>
            ))
          )}
          {routes.private.map((route) =>
            route.subPage?.map((value) => (
              <Link
                key={value.id}
                to={value.pathname}
              >
                {value.pageName}
              </Link>
            ))
          )}
        </Nav>
        <Main>
          <Outlet />
        </Main>
      </ContentContainer>
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem;
  font-size: 2rem;
  font-weight: bolder;
  border-bottom: 1px solid #e2e2e2;
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 15%) 1fr;
  height: 100%;
  min-height: calc(100vh - 2rem);
`;
const Nav = styled.nav`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  border-right: 1px solid #e2e2e2;
  a {
    margin-bottom: 1rem;
    color: black;
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
`;
const Main = styled.main`
  padding: 1.8rem;
  font-size: 2rem;
`;
