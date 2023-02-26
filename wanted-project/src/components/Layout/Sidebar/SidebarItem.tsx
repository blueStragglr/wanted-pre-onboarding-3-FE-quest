import { MenuType } from "./Sidebar";
import "./SidebarItem.scss";

type MenuProps = {
  menu: MenuType;
};

const SidebarItem = ({ menu }: MenuProps) => {
  const { name } = menu;
  return (
    <div className="sidebar-item">
      <span>{name}</span>
    </div>
  );
};

export default SidebarItem;
