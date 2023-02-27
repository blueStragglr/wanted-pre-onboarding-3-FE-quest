import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { NAV } from "~/constants";
import { useAuth } from "~/providers";

const AppLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { loginStatus, setLoginStatus } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoginStatus("fail");
    navigate("/");
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <Title>Wanted Pre-onboarding course</Title>
        </Link>
        <Box>
          {loginStatus === "success" ? (
            <Button onClick={handleLogout}>로그아웃</Button>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Box>
      </Header>
      <FlexBox>
        <Stack>
          {NAV.map(({ title, path }) => {
            return (
              <Link key={`page-id-${title}`} to={path}>
                <LinkText isActive={pathname === path}>{title}</LinkText>
              </Link>
            );
          })}
        </Stack>
        <Main>{<Outlet />}</Main>
      </FlexBox>
    </Container>
  );
};

const Main = styled.main`
  width: 100%;
`;

const LinkText = styled.span<{ isActive: boolean }>`
  font-size: 1.2rem;
  color: ${({ isActive }) => (isActive ? "#0071c0" : "#000000")};
`;

const Stack = styled.aside`
  display: flex;
  flex-direction: column;
  width: 10rem;
  padding: 1rem 2rem;
  gap: 1rem;
  border-right: 1px solid gray;
`;

const FlexBox = styled.div`
  display: flex;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-style: italic;
`;

const Button = styled.button`
  background-color: #ffffff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: max-contenr;
  border-bottom: 1px solid gray;
  padding: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default AppLayout;
