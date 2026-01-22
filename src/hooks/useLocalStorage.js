import { useEffect } from 'react';
import { useState } from 'react';

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const storagedValue = localStorage.getItem(itemName);
        let parsedItem;

        if (!storagedValue) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorage.getItem(itemName));
          setItem(parsedItem);
        }
      } catch (error) {
        setHasError(error);
      }
      setIsLoading(false);
    }, 2000);
  }, []);

  const saveItem = (value) => {
    localStorage.setItem(itemName, JSON.stringify(value));
    setItem(value);
  };

  return { item, saveItem, isLoading, hasError };
}
