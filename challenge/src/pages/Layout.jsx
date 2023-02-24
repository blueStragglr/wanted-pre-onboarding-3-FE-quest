import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const Container = styled.div`
  display: flex;
  height: calc(100vh - 40px);
`;
const ContentWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Layout;
