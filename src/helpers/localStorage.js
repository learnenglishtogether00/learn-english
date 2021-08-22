export const getItemLocalStorage = (name) => {
  return localStorage.getItem(name);
};

export const setItemLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const removeItemLocalStorage = (name) => {
  localStorage.removeItem(name);
};

export const resetLocalStorage = () => {
  localStorage.clear();
};
