import styled from 'styled-components';
import { Header, Sidebar } from 'components/molecules';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <ContentBox>
        <Sidebar />
        <Main>{children}</Main>
      </ContentBox>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  width: 80%;
`;
