import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import SideMenu from './SideMenu';

// interface LayoutProps {}

const Layout = () => {
  return (
    <>
      <Header />
      <SideMenu menuList={['Page A', 'Page B', 'Page C']} />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Layout;

const Content = styled.section`
  padding-top: 100px;
  padding-left: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;
