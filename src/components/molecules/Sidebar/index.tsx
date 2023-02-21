import styled from 'styled-components';
import SidebarContent from 'components/atoms/SidebarContent';

function Sidebar() {
  return (
    <Container>
      <SidebarBox>
        <SidebarContent />
      </SidebarBox>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  width: 20%;
  height: 100%;
`;

const SidebarBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-top: none;
  display: flex;
  justify-content: center;
`;
