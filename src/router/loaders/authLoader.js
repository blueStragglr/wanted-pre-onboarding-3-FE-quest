import { redirect } from 'react-router-dom';

import { USER_TOKEN_KEY } from 'constants';
import { PATH_ROUTE } from 'constants';

export const authLoader = () => {
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  if (userToken) {
    return redirect(PATH_ROUTE.root);
  }
  return null;
};
