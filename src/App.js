import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import styled from "styled-components";

const LazyPageA = lazy(() => import("./pages/PageA"));
const LazyPageB = lazy(() => import("./pages/PageB"));
const LazyPageC = lazy(() => import("./pages/PageC"));
const LazyLogin = lazy(() => import("./pages/Login"));

function App() {
  const [loginState, setLoginState] = useState(false);
  const loginClick = () => {
    if (loginState === false) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  };
  return (
    <Wrapper>
      <Suspense fallback="로딩중">
        <BrowserRouter>
          <Header />
          <FlexDiv>
            <SideBar />
            <Routes>
              <Route path="/" element={<LazyPageA />} />
              <Route path="/2" element={<LazyPageB />} />
              <Route path="/3" element={<LazyPageC />} />
              <Route path="/login" element={<LazyLogin />} />
            </Routes>
            {loginState ? (
              ""
            ) : (
              <LinkTag to="/login">
                <LoginBtn onClick={loginClick}>Login</LoginBtn>
              </LinkTag>
            )}
          </FlexDiv>
        </BrowserRouter>
      </Suspense>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid red;
`;
const FlexDiv = styled.div`
  display: flex;
`;
const LinkTag = styled(Link)`
  text-decoration: none;
`;
const LoginBtn = styled.div`
  color: black;
  width: 100px;
  height: 50px;
  border: 2px solid red;
  border-radius: 20px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 20px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
