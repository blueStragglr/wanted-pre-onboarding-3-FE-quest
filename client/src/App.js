import { useCallback } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	redirect,
} from 'react-router-dom';

import './App.css';
import Main from './pages/Main';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import SignIn from './pages/SignIn';
import RootBoundary from './components/error/RootBoundary';
import { getCookie } from './utils/common';

function App() {
	const checkHasJWT = () => {
		const isSignedIn = getCookie('jwt');

		if (!isSignedIn) throw redirect(`/signin`);
		else return null;
	};

	const loader = () => {
		return checkHasJWT();
	};

	const router = createBrowserRouter([
		{ path: '/', element: <Main />, errorElement: <RootBoundary /> },
		{ path: '/a', element: <PageA />, loader },
		{ path: '/b', element: <PageB />, loader },
		{ path: '/c', element: <PageC /> },
		{ path: 'signin', element: <SignIn /> },
	]);

	return <RouterProvider router={router} />;
}

export default App;
