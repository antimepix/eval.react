import React from 'react';
import './Tendance.css';

const Tendance = () => {
  return (
    <section className="tendance">
      <h2>Tendances</h2>
      <div className="films">
        <div className="film">Dune</div>
        <div className="film">Squid Game</div>
        <div className="film">After</div>
      </div>
    </section>
  );
};

export default Tendance;
