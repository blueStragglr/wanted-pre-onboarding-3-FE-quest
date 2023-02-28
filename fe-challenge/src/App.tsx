import reset from "./Style/style";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <Global styles={reset} />
    </>
  );
}

export default App;
