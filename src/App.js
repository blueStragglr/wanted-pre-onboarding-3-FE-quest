import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";

function App() {
	return (
		<div className="App">
			<Header />
			<SideBar />
			<Outlet />
		</div>
	);
}

export default App;
