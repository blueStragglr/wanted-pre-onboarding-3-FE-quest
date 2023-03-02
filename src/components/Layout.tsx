import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function Layout() {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
}

export default Layout;
