import styled from "styled-components";

function Sidebar() {
  return (
    <>
      <Button>Page A</Button>
      <Button>Page B</Button>
      <Button>Page C</Button>
    </>
  );
}

const Button = styled.button`
  padding: 1rem;
`;

export default Sidebar;
