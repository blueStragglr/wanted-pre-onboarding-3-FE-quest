import { SideBarContainer, SideBarMenu } from "./SideBar.style";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarMenu to="/pagea">Page A</SideBarMenu>
      <SideBarMenu to="/pageb">Page B</SideBarMenu>
      <SideBarMenu to="/pagec">Page C</SideBarMenu>
    </SideBarContainer>
  );
}

export default SideBar;
