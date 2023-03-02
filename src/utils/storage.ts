type StorageKey = "ACCESS_TOKEN";

export const storage = {
  get: (key: StorageKey) => localStorage.getItem(key),
  set: (key: StorageKey, value: string) => localStorage.setItem(key, value),
  remove: (key: StorageKey) => localStorage.removeItem(key),
};
