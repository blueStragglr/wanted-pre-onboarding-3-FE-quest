import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/pageA" element={<PageA />}></Route>
        <Route path="/pageB" element={<PageB />}></Route>
        <Route path="/pageC" element={<PageC />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
