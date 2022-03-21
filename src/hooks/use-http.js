import { useState, useCallback } from 'react';
import axios from 'axios';

axios.defaults.baseURL =
  'https://react-app-practice-5893f-default-rtdb.europe-west1.firebasedatabase.app/expenses.json';

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.request(requestConfig);
      applyData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { error, isLoading, sendRequest };
};
