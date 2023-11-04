export const setLocalStorage = (data) => {
  let dataString = JSON.stringify(data);
  localStorage.setItem('person', dataString);
};
export const getLocalStorage = () => {
  const localStorageData = localStorage.getItem('person');
  if (localStorageData) {
    return JSON.parse(localStorageData);
  }
  return null;
};
