// Header.js
import React from "react";
import LogoImage from "../Images/Logo.png";
import { useDarkMode } from "./DarkModeProvider"; // Import the useDarkMode hook

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`header ${isDarkMode ? "dark-mode" : ""}`}>
      <img id="Logo" src={LogoImage} alt="Little Lemon Logo" />
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;
