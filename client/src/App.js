import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import { useSelector } from "react-redux";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);

  return (
    <MainContainer>
      <BrowserRouter>{isLogin ? <Home /> : <LoginPage />}</BrowserRouter>
    </MainContainer>
  );
}

export default App;
