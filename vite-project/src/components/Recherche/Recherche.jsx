import React from 'react';
import './Recherche.css';

const Recherche = () => {
  return (
    <div className="recherche">
      <input type="text" placeholder="Rechercher un film ou une série..." />
      <button>Rechercher</button>
    </div>
  );
};

export default Recherche;
