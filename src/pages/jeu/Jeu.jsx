/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import NavBar from '../../components/navBar/NavBar';
import fond from '../../img/Plan de travail 1@4x1.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Jeu.css';
import { NavLink } from 'react-router-dom'; // Importez NavLink depuis react-router-dom

function Jeu() {
  const games = [
    {
      name: 'FIFA',
      logo: '/FIFA.jpg',
      description: "Les matchs de FIFA en compétition ont généralement une durée prédéterminée, souvent de 10 à 15 minutes par mi-temps. La durée totale d'un match est donc de 20 à 30 minutes."
    },
    {
      name: 'FREE FIRE',
      logo: '/free fire.webp',
      description: "Les compétitions de Free Fire sont généralement jouées en équipe, avec des équipes composées de 4 à 5 joueurs. Chaque équipe se bat pour être la dernière debout sur une île après avoir été larguée depuis un avion.",
    },
    {
      name: 'PES',
      logo: '/pes.jpg',
      description: "Les tournois de PES peuvent avoir différents formats, y compris des phases de groupes suivies d'éliminations directes, où les perdants sont éliminés progressivement jusqu'à ce qu'il ne reste plus qu'un seul gagnant.",
    },
    {
      name: 'CALL OF DUTY',
      logo: '/call.jpg',
      description: "Les équipes marquent des points en éliminant les membres de l'équipe adverse et en atteignant les objectifs du mode de jeu. Les points peuvent également être attribués en fonction de la position finale de l'équipe.",
    },
    {
      name: 'BLUR',
      logo: '/blur.jpg',
      description: "Les compétitions de Blur se déroulent sur une variété de circuits, chacun ayant ses propres défis et particularités. Les circuits peuvent être sélectionnés en fonction des préférences des organisateurs de tournoi.",
    },
    // Ajoutez les autres jeux de la même manière
  ];

  const [activeGame, setActiveGame] = useState(games[0]);
  const [sliderIndex, setSliderIndex] = useState(0); // Démarrez à partir du premier jeu
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (current, next) => {
      setSliderIndex(next);
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (sliderIndex + 1) % games.length;
      setActiveGame(games[nextIndex]);
      sliderRef.current.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderIndex, games]);

  const slideTo = (index) => {
    sliderRef.current.slickGoTo(index);
    setSliderIndex(index);
    setActiveGame(games[index]);
  };

  return (
    <div className='jeu'>
      
      <Sidebar />
      <img src={fond} alt='' />
      <div className='jeu-content'>
        <div className='menu-jeux'>
         
          {games.map((game, index) => (
            <div
              key={game.name}
              className={`jeu-button ${game.name === activeGame.name ? 'active' : ''}`}
              onClick={() => slideTo(index)}
            >
              {game.name}
            </div>
          ))}
           
          
        </div>
        <div className='slider-container'>
          <Slider {...settings} ref={sliderRef}>
            {games.map((game, index) => (
              <div key={game.name} className={`game-name ${game.name === activeGame.name ? 'active' : ''}`}>
              <img src={game.logo} alt={game.name} />
              <h3>{game.name}</h3>
              <br />
              <p>{game.description}</p>
              <br />
                <NavLink // Utilisez NavLink pour créer le lien vers '/jeux'
                  className='participer-button'
                  to='/jeux'
                >
                  Participer
                </NavLink>
              </div>
              
            ))}
          </Slider>
          <br />
          <br />
          <div
            className='jeu-button down-arrow'
            onClick={() => slideTo((sliderIndex + 1) % games.length)}
          >
            &#8595; {/* Down Arrow */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jeu;
