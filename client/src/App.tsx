import { Reset } from "styled-reset";
import Layout from "./components/layout/Layout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Reset />
      <AppRouter />
    </>
  );
}

export default App;
