import React, { createContext, useState } from 'react';

interface PropsLoading {
  isLoading: boolean;
  addRequest: () => void;
  removeRequest: () => void;
}

export const LoadingContext = createContext({} as PropsLoading);

export const LoadingContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addRequest = () => {
    setIsLoading(true);
  };

  const removeRequest = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, addRequest, removeRequest }}>
      {children}
    </LoadingContext.Provider>
  );
};
