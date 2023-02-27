import { useCallback } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	redirect,
	useHref,
} from 'react-router-dom';

import './App.css';
import Main from './pages/Main';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import SignIn from './pages/SignIn';
import RootBoundary from './components/error/RootBoundary';

const router = createBrowserRouter([
	{ path: '/', element: <Main />, errorElement: <RootBoundary /> },
	{ path: 'page/:pageId', element: <Page /> },
	{ path: 'signin', element: <SignIn /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
