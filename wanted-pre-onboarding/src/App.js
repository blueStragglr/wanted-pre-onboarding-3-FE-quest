import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Route, Routes, Outlet } from "react-router-dom";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import styled from "styled-components";
import Login from "./pages/Login";

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <Center>
        <SideBar />
        <Routes>
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
          <Route path="/pageC" element={<PageC />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Center>
    </div>
  );
}

export default App;
