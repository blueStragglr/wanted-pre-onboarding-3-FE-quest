export const setStorage = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const getStorage = (key: string) => localStorage.getItem(key);
