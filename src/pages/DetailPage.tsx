import { useParams } from "react-router-dom";
import Apage from "../components/menus/Apage";
import Bpage from "../components/menus/Bpage";
import Cpage from "../components/menus/Cpage";

type MatchPage = {
	[key: string]: JSX.Element;
};

const DetailPage = () => {
	const params = useParams();
	const id = params.id;

	return (
		<>
			<div>{id && matchPage[id]}</div>
		</>
	);
};

export default DetailPage;

export const matchPage: MatchPage = {
	1: <Apage />,
	2: <Bpage />,
	3: <Cpage />,
};
