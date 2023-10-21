import { useState } from 'react';

function initStoredValue(keyName: string, defaultValue: unknown) {
  return () => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  };
}
export const useLocalStorage = (keyName: string, defaultValue: unknown) => {
  const [storedValue, setStoredValue] = useState(
    initStoredValue(keyName, defaultValue)
  );
  const setValue = (newValue: unknown) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
