export const setStorageByKey = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getStorageByKey = (key: string) => {
  return localStorage.getItem(key);
};
