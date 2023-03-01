import { BrowserRouter, Routes, Route} from "react-router-dom";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import Header from "./components/public/Header";
import SideBar from "./components/public/SideBar";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/b" element={<PageB />} />
          <Route path="/c" element={<PageC />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
