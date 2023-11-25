export const setStorageByKey = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getStorageByKey = (key: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key);
  }
};
