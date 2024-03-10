// ContextProvider.js
// Author: Yan Nazzim Gonzalez
// Date: 3/10/2024
// Front End Capstone
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
  // Your context logic here

  return (
    <MyContext.Provider value={{ basename: '' }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);

export default ContextProvider;
