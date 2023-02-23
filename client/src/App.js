import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import './App.css';
import Main from './pages/Main';
import Page from './pages/Page';
import SignIn from './pages/SignIn';
import RootBoundary from './components/RootBoundary';

const router = createBrowserRouter([
	{ path: '/', element: <Main />, errorElement: <RootBoundary /> },
	{ path: 'page/:pageId', element: <Page /> },
	{ path: 'signin', element: <SignIn /> },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
