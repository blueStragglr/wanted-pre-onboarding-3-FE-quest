import RootRouter from "./routes/routes";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <RootRouter />
        </>
    );
}

export default App;
