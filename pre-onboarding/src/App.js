import { Route, Routes } from "react-router";
import styled from "styled-components";
import Header from "./components/Header";
import Side from "./components/Side";
import Main from "./routes/Main";
import PageA from "./routes/PageA";
import PageB from "./routes/PageB";
import PageC from "./routes/PageC";

const Contents = styled.div`
  display: flex;
`;

const Nav = styled.div`
  margin-top: 10vh;
  margin-left: 15vh;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <>
      <Header />
      <Contents>
        <Side />
        <Nav>
          <Routes>
            <Route path="/A" element={<PageA /> } />
            <Route path="/B" element={<PageB /> } />
            <Route path="/C" element={<PageC />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </Nav>
      </Contents>
    </>
  );
}

export default App;
