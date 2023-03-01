import { Header } from 'components/Header';
import { Nav } from 'components/Nav';
import { Container } from 'components/Container';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
