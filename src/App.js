import { Routes, Route, BrowserRouter } from "react-router-dom";
import ROUTES from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

