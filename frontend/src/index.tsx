import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { router } from './Router';
import { GlobalStyle } from './util/style/globalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <GlobalStyle />
    <RouterProvider router={router}/>
  </RecoilRoot>
  // </React.StrictMode>
);