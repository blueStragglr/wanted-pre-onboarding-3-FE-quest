import { useNavigate } from "react-router-dom";
import { PAGE_LIST } from "../data/pagelist";
import styled from "styled-components";

const Navbar = () => {
  const pages = PAGE_LIST;

  const navigate = useNavigate();

  const move = (link: string) => {
    navigate(link);
  };

  return (
    <MenuList>
      {pages.map((menu) => {
        return (
          <Menu key={menu.id} onClick={() => move(menu.path)}>
            {menu.title}
          </Menu>
        );
      })}
    </MenuList>
  );
};

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-top: 30px;
`;

const Menu = styled.li`
  cursor: pointer;
  min-height: 80px;
  text-align: center;
  justify-content: center;
  margin: 16px;
`;

export default Navbar;
