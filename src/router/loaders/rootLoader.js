import { redirect } from 'react-router-dom';

import { USER_TOKEN_KEY } from 'constants';
import { PATH_ROUTE } from 'constants';

export const rootLoader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (userToken) {
    return null;
  }
  return redirect(PATH_ROUTE.login);
};
