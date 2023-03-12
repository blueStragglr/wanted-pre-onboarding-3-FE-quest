import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ContextProvider from './context/ContextProvider';
import { router } from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  <ContextProvider>
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  </ContextProvider>
  // </React.StrictMode>
);