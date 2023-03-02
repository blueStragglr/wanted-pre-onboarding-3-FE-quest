import { Link } from "react-router-dom";
import styled from "styled-components";

const Side = styled.aside`
  border-right: 1px solid black;
  width: 20%;
`;

const ListLayout = styled.ul`
  margin-top: 15px;
  padding-left: 12px;
`;

const List = styled.li`
  padding: 10px 0;
`;

const Sidebar = () => {
  return (
    <Side>
      <nav>
        <ListLayout>
          <List>
            <Link to="/a">Page A</Link>
          </List>
          <List>
            <Link to="/b">Page B</Link>
          </List>
          <List>
            <Link to="c">Page C</Link>
          </List>
        </ListLayout>
      </nav>
    </Side>
  );
};

export default Sidebar;
