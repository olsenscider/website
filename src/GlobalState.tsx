// GlobalState.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Create a context with a string state
const GlobalStateContext = createContext<
  { url: string; setUrl: React.Dispatch<React.SetStateAction<string>> }
  | undefined
>(undefined);

// Create the provider component
export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [url, setUrl] = useState('/');

  return (
    <GlobalStateContext.Provider value={{ url, setUrl }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
