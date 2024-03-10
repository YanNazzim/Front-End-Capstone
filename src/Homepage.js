// src/HomePage.js
import React from "react";
import Card from "./Components/Card";

const HomePage = () => {
  return (
    <div>
      <h2 className="homepageH2">Featured Items</h2>
      <div className="card-container">
        <Card
          title="Grilled Chicken Salad"
          description="Fresh greens with grilled chicken"
          price="10.99"
          image={require("./Images/salad.jpg")}
        />
        <Card
          title="Margherita Pizza"
          description="Classic pizza with fresh tomatoes and mozzarella"
          price="12.99"
          image={require("./Images/margherita-pizza.jpg")}
        />
        <Card
          title="Vegetarian Pasta"
          description="Pasta with a variety of fresh vegetables"
          price="11.99"
          image={require("./Images/vegetarian-pasta.jpg")}
        />
        <Card
          title="Sushi Platter"
          description="Assorted sushi rolls and sashimi"
          price="15.99"
          image={require("./Images/sushi-platter.jpg")}
        />
        <Card
          title="BBQ Ribs"
          description="Tender BBQ ribs with a savory glaze"
          price="14.99"
          image={require("./Images/bbq-ribs.jpg")}
        />
        <Card
          title="Chocolate Brownie Sundae"
          description="Warm chocolate brownie with ice cream"
          price="8.99"
          image={require("./Images/chocolate-brownie-sundae.jpg")}
        />
        <Card
          title="Caprese Sandwich"
          description="Fresh mozzarella, tomatoes, and basil on ciabatta"
          price="9.99"
          image={require("./Images/caprese-sandwich.jpg")}
        />
        <Card
          title="Seafood Paella"
          description="Spanish rice dish with a variety of seafood"
          price="16.99"
          image={require("./Images/seafood-paella.jpg")}
        />
        <Card
          title="Mango Tango Smoothie"
          description="Refreshing mango and tropical fruit smoothie"
          price="6.99"
          image={require("./Images/mango-tango-smoothie.jpg")}
        />
      </div>
    </div>
  );
};

export default HomePage;
