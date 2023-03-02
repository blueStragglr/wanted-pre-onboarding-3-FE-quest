import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Root, Error, About, Community, My, SignIn, SignUp, Features, Hero } from '@/pages';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/features',
        element: <Features />,
      },
      {
        path: '/my',
        element: <My />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
