import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import IsLogin from "./page/IsLogin";
import Login from "./page/Login";
import PageA from "./page/PageA";
import PageB from "./page/PageB";
import PageC from "./page/PageC";

function App() {
  const isLogin = false;

  return (
    <>
      {isLogin ? (
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<PageA />} />
            <Route path="pageb" element={<PageB />} />
            <Route path="pagec" element={<PageC />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<PageA />} />
            <Route path="pageb" element={<PageB />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="*" element={<IsLogin />} />
        </Routes>
      )}
    </>
  );
}

export default App;
