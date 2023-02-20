import { Reset } from "styled-reset";
import Layout from "./components/layout/Layout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
      <Reset />
      <Layout>
        <AppRouter />
      </Layout>
    </>
  );
}

export default App;
