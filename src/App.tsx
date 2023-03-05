import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Text from "./lib/Text/Text";
import PageLayout from "./lib/Layout/Layout";
import Router from "./router";
const Div = styled.div`
	color: white;
`;

function App() {
	return <Router />;
}

export default App;
