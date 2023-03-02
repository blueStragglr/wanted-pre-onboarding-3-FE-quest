import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 100vh;
  padding: 20px;
  border-right: 3px solid #cecece;
`;

const Page = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  color: ${(props) => (props.isActive ? props.theme.highlight : props.theme.textColor)};
`;

function Sidebar() {
  const pageAMatch = useMatch('/pageA');
  const pageBMatch = useMatch('/pageB');
  const pageCMatch = useMatch('/pageC');

  return (
    <SidebarWrapper>
      <Page isActive={Boolean(pageAMatch)}>
        <Link to="/pageA">Page A</Link>
      </Page>
      <Page isActive={Boolean(pageBMatch)}>
        <Link to="/pageB">Page B</Link>
      </Page>
      <Page isActive={Boolean(pageCMatch)}>
        <Link to="/pageC">Page C</Link>
      </Page>
    </SidebarWrapper>
  );
}

export default Sidebar;
