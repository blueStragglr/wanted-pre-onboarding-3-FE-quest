import Template from '../page/Template';
import PageA from '../page/PageA';
import PageB from '../page/PageB';
import PageC from '../page/PageC';

const PageData: page[] = [
  { name: 'Page A', path: '/pageA', contentsComponent: <Template contents={<PageA />} /> },
  { name: 'Page B', path: '/pageB', contentsComponent: <Template contents={<PageB />} /> },
  { name: 'Page C', path: '/pageC', contentsComponent: <Template contents={<PageC />} /> },
];

export type page = {
  name: string;
  path: string;
  contentsComponent: JSX.Element;
};

export default PageData;
