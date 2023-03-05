import { Routes, Route } from 'react-router';

import { ROUTE_PATH } from './routePath';
import { PageA, PageB, PageC, Intro } from '../pages';
import { isValidArray } from '../utils/ArrayUtils';

const routes = [
	{ id: 1, path: ROUTE_PATH.INTRO, element: <Intro /> },
	{ id: 2, path: ROUTE_PATH.PAGEA, element: <PageA /> },
	{ id: 3, path: ROUTE_PATH.PAGEB, element: <PageB /> },
	{ id: 4, path: ROUTE_PATH.PAGEC, element: <PageC /> },
];

const Router = () => {
	return (
		<Routes>
			{isValidArray(routes) && routes.map(({ id, path, element }) => <Route key={id} path={path} element={element} />)}
		</Routes>
	);
};

export default Router;
