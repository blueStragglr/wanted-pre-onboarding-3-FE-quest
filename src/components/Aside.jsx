import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20vh;
  height: 90vh;
  border-right: 1px solid #000;
  padding: 20px;
`;

const Page = styled(Link)`
  &:hover {
    color: #008cff;
  }
`;

function Aside() {
  return (
    <Sidebar>
      <Page to="/">Page A</Page>
      <Page to="/pageb">Page B</Page>
      <Page to="/pagec">Page C</Page>
    </Sidebar>
  );
}

export default Aside;
