// DarkModeProvider.js
import React, { createContext, useState, useContext } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export default DarkModeProvider;
