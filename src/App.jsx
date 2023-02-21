import './components/styles/reset.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Apage from "./components/pages/Apage";
import Bpage from "./components/pages/Bpage";
import Cpage from "./components/pages/Cpage";
import Dpage from "./components/pages/Dpage";
import Layout from "./components/layouts/Layout";
import SignIn from "./components/pages/Login";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={"/login"} element={<SignIn />} />
        <Route element={<Layout />}>
          <Route path={"/"} element={<Apage />} />
          <Route path="/apage" element={<Apage />} />
          <Route path="/bpage" element={<Bpage />} />
          <Route path="/cpage" element={<Cpage />} />
          <Route path="/dpage" element={<Dpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
