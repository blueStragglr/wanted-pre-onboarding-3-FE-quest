import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ContextProvider from './context/ContextProvider';
import { router } from './Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  <ContextProvider>
      <RouterProvider router={router}/>
  </ContextProvider>
  // </React.StrictMode>
);