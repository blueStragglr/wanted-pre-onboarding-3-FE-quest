import { USER_TOKEN_KEY } from 'constants';
import { userClient } from './userClient';
import { PATH_API } from 'constants';

export const loginApi = ({ email, password }) => {
  return userClient.post(PATH_API.login, { email, password });
};

export const joinApi = ({ email, password }) => {
  return userClient.post(PATH_API.join, { email, password });
};

export const logoutApi = () => {
  localStorage.removeItem(USER_TOKEN_KEY);
};
