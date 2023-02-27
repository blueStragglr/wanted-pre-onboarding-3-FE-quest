import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Layout from './components/layouts/Layout';
import GlobalStyle from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <GlobalStyle/>
        <BrowserRouter>
            <Layout>
                <App/>
            </Layout>
        </BrowserRouter>
    </StrictMode>
)