import { Link } from "react-router-dom";
import styled from "styled-components";

const Side = ({ menus }) => {
  return (
    <SideBar>
      <SideUl>
        {menus.map((menu, index) => (
          <Link to={`/${menu[0]}`} key={index}>
            <SideLi>{menu[1]}</SideLi>
          </Link>
        ))}
      </SideUl>
    </SideBar>
  );
};

const SideBar = styled.aside`
  width: 100%;
  max-width: 200px;
  height: 100%;
  border-right: 1px solid lightgray;
  padding: 30px 30px 0 30px;
  box-sizing: border-box;
  position: fixed;
  top: 60px;
  flex: 1;
`;

const SideUl = styled.ul`
  width: 100%;
  text-align: center;
`;

const SideLi = styled.li`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #222;
  font-weight: 600;
`;

export default Side;
