import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value) => {
  const halfHour = new Date(Number(new Date()) + 60 * 30 * 1000);
  return cookies.set(name, value, {
    expires: halfHour,
    secure: true,
  });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};
