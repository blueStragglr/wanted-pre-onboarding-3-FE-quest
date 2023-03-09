import { Link, useMatch, Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

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
  const pageAMatch = useMatch('/pages/a');
  const pageBMatch = useMatch('/pages/b');
  const pageCMatch = useMatch('/pages/c');

  const { pageId } = useParams();

  return (
    <Wrapper>
      <SidebarWrapper>
        <Page isActive={Boolean(pageAMatch)}>
          <Link to="pages/a">Page A</Link>
        </Page>
        <Page isActive={Boolean(pageBMatch)}>
          <Link to="pages/b">Page B</Link>
        </Page>
        <Page isActive={Boolean(pageCMatch)}>
          <Link to="pages/c">Page C</Link>
        </Page>
      </SidebarWrapper>
      <Outlet
        context={{
          pageId: pageId,
        }}
      />
    </Wrapper>
  );
}

export default Sidebar;
