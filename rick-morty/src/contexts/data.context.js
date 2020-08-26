import React, { useState, createContext } from 'react';

export const DataContext = createContext();
export const ErrorContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  return (
    <DataContext.Provider value={{ data, setData }}>
      <ErrorContext.Provider value={{ error, setError }}>
        {props.children}
      </ErrorContext.Provider>
    </DataContext.Provider>
  );
};
