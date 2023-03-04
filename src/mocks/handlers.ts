import { rest } from 'msw';

const sampleData = [
  { name: 'MSW', url: 'https://mswjs.io/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
];

export const handlers = [
  rest.get('/docs_list', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sampleData));
  }),
];
