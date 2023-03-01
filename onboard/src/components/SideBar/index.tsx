import { Link } from "react-router-dom";
import { SideBarContainer } from "./SideBar.style";

function SideBar() {
  return (
    <SideBarContainer>
      <Link to="/pagea">Page A</Link>
      <Link to="/pageb">Page B</Link>
      <Link to="/pagec">Page C</Link>
    </SideBarContainer>
  );
}

export default SideBar;
