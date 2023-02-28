import logo from "./logo.svg";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import styled from "styled-components";
import Content from "./ui/Content";

function App() {
	return (
		<Container>
			<Header />
			<SideBar />
			<Outlet />
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 200px 1fr 1fr;
	grid-template-rows: 80px 1fr 1fr;
	grid-template-areas:
		"header header header"
		"sidebar content content"
		"sidebar content content";
`;

export default App;
