import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  width: 150px;
  height: 100vh;
  border-right: 2px gray solid;
  margin: 0;
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
    Auth: false,
  },
  {
    part: "PageB",
    pathname: `/PageB`,
    Auth: false,
  },
  {
    part: "PageC",
    pathname: `/PageC`,
    Auth: false,
  },
  { part: "NeedLogin", pathname: `/needLogin`, Auth: true },
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
                state={{ Auth: item.Auth }}
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
