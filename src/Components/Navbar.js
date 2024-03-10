// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link id="navLinksHome" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link id="navLinksBook" to="/booking">
            Booking
          </Link>
        </li>
        <li>
          <Link id="navLinksAbout" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link id="navLinksContact" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <input type="text" className="search-bar" placeholder="Search..." />
    </nav>
  );
}

export default Navbar;
