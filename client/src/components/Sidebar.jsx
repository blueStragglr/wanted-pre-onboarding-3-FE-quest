import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PagesContext from "../contexts/PagesContext";

export default function Sidebar() {
  const { pageComponents } = useContext(PagesContext);

  const navigate = useNavigate();

  const HandleClick = (e) => {
    if (e.target.name === "Home") {
      navigate("/");
    } else {
      navigate(`/${e.target.name}`);
    }
  };

  return (
    <StyledSidebar>
      <PagesContext.Provider value={pageComponents}>
        {pageComponents.map((page) => {
          return (
            <button key={page.name} name={page.name} onClick={HandleClick}>
              {page.name}
            </button>
          );
        })}
      </PagesContext.Provider>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
`;
