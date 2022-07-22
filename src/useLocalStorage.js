import { useState, useEffect } from "react";

const accessStorage = (key, intialValue) => {
  const returnValue = JSON.parse(localStorage.getItem(key));
  if (returnValue) return returnValue;

  if (intialValue instanceof Function) return intialValue();

  return intialValue;
};

export const useLocaleStorage = (key, intialValue) => {
  const [value, setValue] = useState(() => accessStorage(key, intialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
