// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, price, image, to, width, height }) => {
  const cardStyle = {
    width: width || '300px',
    height: height || '350px', // Use the specified width or default to 100%
  };

  return (
    <Link to={to || '/booking'} className="card-link">
      <div className="card" style={cardStyle}>
        {image && <img src={image} alt={title} className="card-image" />}
        <h3 className="cardTitle">{title}</h3>
        <p className="cardDesc">{description}</p>
        {price && <p className="cardPrice">Price: ${price}</p>}
      </div>
    </Link>
  );
};

export default Card;
