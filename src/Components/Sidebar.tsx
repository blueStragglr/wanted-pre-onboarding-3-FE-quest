import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const Items = styled.ul`
  border-right: 1px solid;
`;

const Item = styled.li`
  padding: 20px;
`;

function Sidebar() {
  const home = useMatch("/");
  const pageA = useMatch("/pagea");
  const pageB = useMatch("/pageb");
  const pageC = useMatch("/pagec");
  return (
    <Items>
      <Item style={home ? { color: "skyblue" } : { color: "inherit" }}>
        <Link to="/">Home</Link>
      </Item>
      <Item style={pageA ? { color: "skyblue" } : { color: "inherit" }}>
        <Link to="/pagea">Page A</Link>
      </Item>
      <Item style={pageB ? { color: "skyblue" } : { color: "inherit" }}>
        <Link to="/pageb">Page B</Link>
      </Item>
      <Item style={pageC ? { color: "skyblue" } : { color: "inherit" }}>
        <Link to="/pagec">Page C</Link>
      </Item>
    </Items>
  );
}

export default Sidebar;
