import { BrowserRouter, Route, Routes } from "react-router-dom";

import A from "./page/A";
import B from "./page/B";
import C from "./page/C";

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<A />} />
			<Route path="/B" element={<B />} />
			<Route path="/C" element={<C />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
