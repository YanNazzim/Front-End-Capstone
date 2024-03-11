// App.js
// Author: Yan Nazzim Gonzalez
// Date: 3/10/2024
// Front End Capstone
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import HomePage from "../src/Homepage";
import BookingPage from "./src/Bookingpage";
import AboutPage from "./Aboutpage";
import ContactPage from "./Contactpage";
import DarkModeProvider from "./Components/DarkModeProvider"; // Import the provider


function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
