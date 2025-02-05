import React from 'react';
import './HeadBar.css';

const HeadBar = () => {
  return (
    <div className="headbar">
      <h1>Films</h1>
      <nav>
        <a href="#films">Films</a>
        <a href="#series">Séries</a>
        <a href="#populaires">Populaires</a>
      </nav>
      <input type="text" placeholder="Rechercher un titre" />
    </div>
  );
};

export default HeadBar;
