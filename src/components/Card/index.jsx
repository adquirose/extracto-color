import React from 'react';
import "../Card/styles.css";

const Card = ({ name, price, image}) => (
    <div className="natural-product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
);

export default Card