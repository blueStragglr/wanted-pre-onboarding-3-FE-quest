import PageA from '../page/PageA';
import PageB from '../page/PageB';
import PageC from '../page/PageC';

const PageData: page[] = [
  { name: 'Page A', path: '/pageA', element: <PageA /> },
  { name: 'Page B', path: '/pageB', element: <PageB /> },
  { name: 'Page C', path: '/pageC', element: <PageC /> },
];

export type page = {
  name: string;
  path: string;
  element: JSX.Element;
};

export default PageData;
