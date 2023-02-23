import styled from 'styled-components';
import SideBar from '../SideBar';
import Header from '../Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <StyledLayout>
        <SideBar />
        <Outlet />
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.section`
  width: 100%;
  display: flex;
`;

export default Layout;
