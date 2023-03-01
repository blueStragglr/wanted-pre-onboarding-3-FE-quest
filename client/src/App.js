import { BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import Header from "./components/public/Header";
import SideBar from "./components/public/SideBar";

const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 80px);
`

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <SideBar />
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/b" element={<PageB />} />
          <Route path="/c" element={<PageC />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
