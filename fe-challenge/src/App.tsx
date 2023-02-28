import reset from "./Style/style";
import { Global } from "@emotion/react";
import Header from "./Layout/Header/Header";
import Mainlayout from "./Layout/MainLayout/MainLayout";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Header />
      <Mainlayout />
    </>
  );
}

export default App;
