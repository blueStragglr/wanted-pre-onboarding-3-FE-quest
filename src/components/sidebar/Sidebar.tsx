import { SidebarContainer, Link, SidebarItem } from './Sidebar.style';
import sidebar from '../../data/sidebar';

function Sidebar() {
  return (
    <>
      <SidebarContainer>
        {sidebar.map(link => (
          <Link to={link.link} key={link.title}>
            <SidebarItem>{link.title}</SidebarItem>
          </Link>
        ))}
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
