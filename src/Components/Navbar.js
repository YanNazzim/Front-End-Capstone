// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link id="navLinks" to="/">Home</Link>
        </li>
        <li>
          <Link id="navLinks" to="/booking">Booking</Link>
        </li>
        <li>
            <Link id="navLinks" to="/aboutus">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
