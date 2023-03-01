import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    #root {
        height: 100vh;
    }

    a {
        text-decoration: none;
        font-size: 12pt;
        font-weight: 600;
        color: gray;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);
