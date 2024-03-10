// src/components/Header.js
import React from 'react';
import LogoImage from '../Images/Logo.png'; // Import the image

function Header() {
  return (
    <header>
      <img id="Logo" src={LogoImage} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;
