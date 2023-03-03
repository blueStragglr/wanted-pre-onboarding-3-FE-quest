import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../pages/Main';
import PageA from '../pages/PageA';
import PageB from '../pages/PageB';
import PageC from '../pages/PageC';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'a',
        element: <PageA />,
      },
      {
        path: 'b',
        element: <PageB />,
      },
      {
        path: 'c',
        element: <PageC />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={'/' || '/a'} element={<PageA />} />
//         <Route path='/b' element={<PageB />} />
//         <Route path='/c' element={<PageC />} />
//         {/* <Route path='/login' element={<Login />}></Route> */}
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default router;
