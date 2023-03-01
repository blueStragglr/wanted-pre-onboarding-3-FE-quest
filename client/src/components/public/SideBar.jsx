import { useState } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const StyledSideBar = styled.aside`
  border-right: 1px solid #DBDBDB;
  width: 200px;
  padding: 20px 0px 0px 20px;

  nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .located {
    color: blue;
  }
`

const SideBar = () => {
  const [ curPage, setCurPage ] = useState(useLocation().pathname);

  const handleCurPage = (page) => {
    setCurPage(page);
  }

  return (
    <StyledSideBar>
      <nav>
        <Link to={"/"} className={curPage === "/" && "located"} onClick={() => handleCurPage("/")}>Page A</Link>
        <Link to={"/b"} className={curPage === "/b" && "located"} onClick={() => handleCurPage("/b")}>Page B</Link>
        <Link to={"/c"} className={curPage === "/c" && "located"} onClick={() => handleCurPage("/c")}>Page C</Link>
      </nav>
    </StyledSideBar>
  )
}

export default SideBar;