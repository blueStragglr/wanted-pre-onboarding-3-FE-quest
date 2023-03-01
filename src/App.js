import { observer } from "mobx-react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import { ROUTES } from "./routes";
import loginStore from "./stores/LoginStore";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/A" />} />
          {ROUTES.map(({ name, path, element }) => (
            <Route
              path={path}
              element={loginStore.pageLoginStatus[name] ? element : <Login />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default observer(App);

