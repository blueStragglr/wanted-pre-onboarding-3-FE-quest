import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name:string, value:string) => {
  const halfHour = new Date(Number(new Date()) + 60 * 30 * 1000);
  return cookies.set(name, value, {
    expires: halfHour,
    secure: true,
  });
};

export const getCookie = (name:string) => {
  return cookies.get(name);
};

export const removeCookie = (name:string) => {
  return cookies.remove(name);
};
