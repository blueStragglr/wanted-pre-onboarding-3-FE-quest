import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./component/Login";
import Main from "./component/Main";
import Nav from "./Nav";
import SideBar from "./SideBar";

export default function Router() {
  const [selectPage, setSelectPage] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Main"
          element={
            <>
              <Nav />
              <ContentZone>
                <SideBar
                  selectPage={selectPage}
                  setSelectPage={setSelectPage}
                />
                <Main selectPage={selectPage} />
              </ContentZone>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const ContentZone = styled.div`
  display: flex;
`;
