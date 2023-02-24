import { Link } from "react-router-dom";
import { DefaultButton } from "../General";
import { Container, ListBox } from "./style";
const Sidebar = () => {
  return (
    <>
      <Container>
        <ListBox>
          <ul>
            <li>
              <Link to="/a">
                <DefaultButton text="page A" />
              </Link>
            </li>
            <li>
              <Link to="/b">
                <DefaultButton text="page B" />
              </Link>
            </li>
            <li>
              <Link to="/c">
                <DefaultButton text="page C" />
              </Link>
            </li>
          </ul>
        </ListBox>
      </Container>
    </>
  );
};
export default Sidebar;
