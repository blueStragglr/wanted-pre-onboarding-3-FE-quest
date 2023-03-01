import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Common/Header";
import Nav from "./Component/Common/Nav";
import Apage from "./Pages/Apage";
import Bpage from "./Pages/Bpage";
import Cpage from "./Pages/Cpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/apage" element={<Apage />} />
          <Route path="/bpage" element={<Bpage />} />
          <Route path="/cpage" element={<Cpage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
