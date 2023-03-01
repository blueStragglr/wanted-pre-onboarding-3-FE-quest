interface Page {
  id: number;
  name: string;
  path: string;
}

export const pages: Page[] = [
  {
    id: 1,
    name: 'Page A',
    path: '/pages/a',
  },
  {
    id: 2,
    name: 'Page B',
    path: '/pages/b',
  },
  {
    id: 3,
    name: 'Page C',
    path: '/pages/c',
  },
];
