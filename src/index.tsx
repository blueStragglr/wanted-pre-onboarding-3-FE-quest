import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from './Styles/GlobalStyle';
import './Styles/common.scss';
import './Styles/reset.scss';
import './Styles/tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <GlobalStyle />
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
