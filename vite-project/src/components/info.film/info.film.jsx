import React from 'react';
import Casting from './Casting';
import './InfoFilm.css';

const InfoFilm = () => {
  return (
    <section className="info-film">
      <h2>Spider-Man: No Way Home</h2>
      <p>Après les événements de ...</p>
      <Casting />
    </section>
  );
};

export default InfoFilm;
