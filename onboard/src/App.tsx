import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import PageA from "./pages/pageA";
import PageB from "./pages/pageB";
import PageC from "./pages/pageC";
import SignIn from "./pages/SignIn";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/sign-in" && (
        <>
          <Header />
          <SideBar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Navigate replace to="/pagea" />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/pagea" element={<PageA />} />
        <Route path="/pageb" element={<PageB />} />
        <Route path="/pagec" element={<PageC />} />
      </Routes>
    </div>
  );
}

export default App;
