import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import Login from './pages/Login';
import Main from './pages/Main';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
        font-family: 'Space Mono';
        color: #485460;
    } 
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
`;

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="/pageA" element={<PageA />}></Route>
				<Route path="/pageB" element={<PageB />}></Route>
				<Route path="/pageC" element={<PageC />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
