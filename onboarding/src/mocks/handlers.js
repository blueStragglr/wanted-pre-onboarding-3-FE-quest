import { rest } from 'msw';
import { baseApiUrl } from '../constants/baseUrl';

const testEmail = 'testEmail@test.com';
const testPassword = 'testpassword';

export const handlers = [
  rest.post(`${baseApiUrl}/login`, (req, res, ctx) => {
    const { email, password } = req.body;

    if (email === testEmail && password === testPassword) {
      return res(ctx.status(200));
    }

    return res(ctx.status(401));
  }),
];
