// src/AboutPage.js
// Author: Yan Nazzim Gonzalez
// Date: 3/10/2024
// Front End Capstone
import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {

  
  return (
    <>
      {/* Larger main section */}
      <div
        style={{
          borderRadius: "15px",
          color: "yellow",
          padding: "15px",
          textAlign: "center",
          marginTop: "3%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#1d4522",
          width: "90vw",
        }}
      >
        <h2 className="aboutH2">About Little Lemon Restaurant</h2>
        <img
          src={require("./Images/chicago.jpg")}
          alt="chicago skyline"
          style={{ borderRadius: "15px" }}
        ></img>
        <p>
          Welcome to Little Lemon, your gateway to Chicago's culinary wonders.
          Our roots are deeply embedded in the heart of this lively city, and we
          bring you a delectable blend of flavors inspired by our rich history.
        </p>
        <p>
          At Little Lemon, we celebrate the spirit of Chicago through our
          dishes, each telling a unique story of our cultural diversity. Every
          bite is a journey through the vibrant streets and neighborhoods that
          make this city exceptional.
        </p>
        <p>
          Join us in savoring the essence of Chicago at Little Lemon Restaurant,
          where passion meets flavor, and every meal is a tribute to the Windy
          City.
        </p>
      </div>

      {/* Sub-sections for Catering, Delivery, and Take-out */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5vh",
        }}
      >
        {/* Catering */}
        <Link
          to="/contact"
          className="card-link"
          style={{
            borderRadius: "15px",
            color: "yellow",
            width: "30%",
            textAlign: "center",
            backgroundColor: "#1d4522",
            textDecoration: "none",
          }}
        >
          <div>
            <h3>Catering</h3>
            <img
              src={require("./Images/catering.jpg")}
              alt="catering"
              style={{ width: "85%", borderRadius: "15px" }}
            ></img>
            <p>Let us cater your special events with our delicious dishes.</p>
          </div>
        </Link>

        {/* Delivery */}
        <Link
        className="card-link"
          to="/contact"
          style={{
            borderRadius: "15px",
            color: "yellow",
            width: "30%",
            textAlign: "center",
            backgroundColor: "#1d4522",
            textDecoration: "none",
          }}
        >
          <h3>Delivery</h3>
          <img
            src={require("./Images/delivery.jpg")}
            alt="delivery"
            style={{ width: "85%", borderRadius: "15px" }}
          ></img>
          <p>Experience convenience with our reliable food delivery service.</p>
        </Link>

        {/* Take-out */}
        <Link
        className="card-link"
          to="/contact"
          style={{
            borderRadius: "15px",
            color: "yellow",
            width: "30%",
            textAlign: "center",
            backgroundColor: "#1d4522",
            textDecoration: "none",
          }}
        >
          <h3>Take-out</h3>
          <img
            src={require("./Images/takeout.jpg")}
            alt="takeout"
            style={{ width: "85%", borderRadius: "15px" }}
          ></img>

          <p>
            Enjoy our food from the comfort of your home with our take-out
            service.
          </p>
        </Link>
      </div>
    </>
  );
};

export default AboutPage;
