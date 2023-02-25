import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: absolute;
  width: 150px;
  height: 100%;
  border-right: 2px gray solid;
`;
const NavList = styled.ul``;

const Page = styled.li`
  box-sizing: border-box;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    text-decoration: none;
  }
`;

const NavPart = [
  {
    part: "PageA",
    pathname: `/PageA`,
  },
  {
    part: "PageB",
    pathname: `/PageB`,
  },
  {
    part: "PageC",
    pathname: `/PageC`,
  },
];

function SideNav() {
  return (
    <>
      <Nav>
        <NavList>
          {NavPart.map((item) => (
            <Page key={item.part}>
              <Link
                to={{
                  pathname: item.pathname,
                }}
                state={{}}
              >
                {item.part}
              </Link>
            </Page>
          ))}
        </NavList>
      </Nav>
    </>
  );
}

export default SideNav;
