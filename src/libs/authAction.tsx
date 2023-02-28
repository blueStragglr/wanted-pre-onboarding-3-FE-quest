const AUTH_KEY = "login";

export const getAuth = () => {
  return localStorage.getItem(AUTH_KEY);
};

export const setAuth = (value: string) => {
  localStorage.setItem(AUTH_KEY, value);
};

export const removeAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};
