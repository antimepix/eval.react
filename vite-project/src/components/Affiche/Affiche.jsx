import React from 'react';
import './Affiche.css';

const Affiche = ({ title, image, rating }) => {
  return (
    <div className="affiche">
      <img src={image} alt={title} />
      <div className="details">
        <h3>{title}</h3>
        <p>{rating}%</p>
      </div>
    </div>
  );
};

export default Affiche;
