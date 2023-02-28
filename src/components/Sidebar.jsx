import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarWrapper>
      <Button>Page A</Button>
      <Button>Page B</Button>
      <Button>Page C</Button>
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
`;

export default Sidebar;
