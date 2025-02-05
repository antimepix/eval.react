import './App.css'
import './css/style.css'
import React from 'react';
import HeadBar from './components/HeadBar';
import Tendance from './components/Tendance';
import Série_TV from './components/Série_TV';
import info.film from './components/info.film';

const App = () => {
  return (
    <div className="App">
      <HeadBar />
      <div className="content">
        <Tendance />
        <SerieTV />
        <infofilm />
      </div>
    </div>
  );
};

export default App;


/*
import { useState } from 'react';
import { FaFilm, FaSearch } from 'react-icons/fa';

const NavMobile = ({ menuOuvert, basculerMenu }) => (
  <nav className="">
    <a href="index.html">
      <FaFilm size={24} />
    </a>
    <button onClick={basculerMenu} className="">
      <div className=""></div>y-
      <div className=""></div>
      <div className=""></div>
    </button>
  </nav>
);

const Menu = ({ menuOuvert }) => (
  menuOuvert && (
    <div className="">
      <ul>
        <li><a href="#">Films</a></li>
        <li><a href="#">Séries</a></li>
        <li><a href="#">Populaires</a></li>
      </ul>
    </div>
  )
);

const BarreDeRecherche = () => (
  <div className="">
    <input type="text" placeholder="Rechercher un film" className="" />
    <button className="">
      <FaSearch />
    </button>
  </div>
);

const EnteteSection = ({ titre, boutons }) => (
  <div className="">
    <h2 className="">{titre}</h2>
    <div>
      {boutons.map(({ label, actif, onClick }) => (
        <button
          key={label}
          onClick={onClick}
          className={actif ? "" : ""}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

const SectionTendances = ({ tendanceSelectionnee, setTendanceSelectionnee }) => (
  <div className="">
    <EnteteSection
      titre="Tendances"
      boutons={[
        { label: "Aujourd'hui", actif: tendanceSelectionnee === "jour", onClick: () => setTendanceSelectionnee("jour") },
        { label: "Cette semaine", actif: tendanceSelectionnee === "semaine", onClick: () => setTendanceSelectionnee("semaine") }
      ]}
    />
    <div className="" id="tendances"></div>
  </div>
);

const SectionPopulaire = ({ categorieSelectionnee, setCategorieSelectionnee }) => (
  <div className="">
    <EnteteSection
      titre="Séries TV"
      boutons={[
        { label: "Mieux notées", actif: categorieSelectionnee === "top_rated", onClick: () => setCategorieSelectionnee("top_rated") },
        { label: "Populaires", actif: categorieSelectionnee === "populaire", onClick: () => setCategorieSelectionnee("populaire") }
      ]}
    />
    <div className=""populaires"></div>
  </div>
);

const PiedDePage = () => (
  <footer className="">
    <p>Tous droits réservés</p>
  </footer>
);

const App = () => {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [tendanceSelectionnee, setTendanceSelectionnee] = useState("jour");
  const [categorieSelectionnee, setCategorieSelectionnee] = useState("populaire");

  return (
    <div>
      {// Nav Mobile }
      <NavMobile menuOuvert={menuOuvert} basculerMenu={() => setMenuOuvert(!menuOuvert)} />
      <Menu menuOuvert={menuOuvert} />

      {// Barre de Recherche }
      <BarreDeRecherche />

      {// Section Tendances }
      <SectionTendances tendanceSelectionnee={tendanceSelectionnee} setTendanceSelectionnee={setTendanceSelectionnee} />

      {// Section Populaire }
      <SectionPopulaire categorieSelectionnee={categorieSelectionnee} setCategorieSelectionnee={setCategorieSelectionnee} />

      {// Pied de Page}
      <PiedDePage />
    </div>
  );
};

export default App;

*/