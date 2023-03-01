import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './common/globalStyled';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
