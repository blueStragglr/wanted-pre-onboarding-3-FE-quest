import { Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";

import Aside from "./components/Aside";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

const Layout1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  const logInUrl = useMatch("/logIn");
  return (
    <Layout1>
      {logInUrl ? null : <Nav />}
      <Layout>
        {logInUrl ? null : <Aside />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PageA" element={<PageA />} />
          <Route path="/PageB" element={<PageB />}></Route>
          <Route path="/PageC" element={<PageC />}></Route>
          <Route path="/logIn" element={<LogIn />}></Route>
        </Routes>
      </Layout>
    </Layout1>
  );
}

export default App;
