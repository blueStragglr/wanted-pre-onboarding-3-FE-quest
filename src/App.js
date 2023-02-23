import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";

const { BrowserRouter, Routes, Route } = require("react-router-dom");

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content-body">
        <Sidebar />
        <Routes>
          <Route path="/pageA" element={<PageA />}></Route>
          <Route path="/pageB" element={<PageB />}></Route>
          <Route path="/pageC" element={<PageC />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
