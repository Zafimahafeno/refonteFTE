import React, { useState, useEffect } from 'react';
import './SlideProgramme.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

// Importez vos images
import image1 from '../../img/gallery/3.jpg';
import image2 from '../../img/gallery/9.jpg';
import image3 from '../../img/gallery/1.jpg';


const sliderData = [
  {
    id: 1,
    image: image1
  },
  {
    id: 2,
    image: image2
  },
  {
    id: 3,
    image: image3
  }
];

const sliderDataThumbs = [

    {
        id: 1,
        titre1:'Salon',
        span: 'de la',
        titre2:' TECH',
        volet:'VOLET 01 '
    },
    {
        id: 2,
        titre1:'Tournoi',
        span: 'et',
        titre2:' Jeux ',
        volet:'VOLET 02 '
    },
    {
        id: 3,
        titre1:'Master',
        titre2:'Class',
        volet:'VOLET 03 '
    }
  ];

  const Slide = ({ data }) => {
    return (
      <div className="slide">
        <motion.img
          src={data.image}
          alt={data.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        />
      </div>
    );
  };
  

  const SlideProgramme = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [thumbIndex, setThumbIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        );
        setThumbIndex((prevIndex) =>
          prevIndex === sliderDataThumbs.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change d'image toutes les 5 secondes
  
      return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
    }, []);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1500 },
  });

  return (
    <div>
      <div className="fte-pro">
        <div className="pro-titre-container">
          <div className="pro-about-titre">
            <h2>Au programme </h2>
            <p>Retrouvez les diverses activités durant FIANARA TECH EXPO</p>
          </div>
        </div>
        <div className="GrandSlide">
          <div className="GrandSlide-pro">
            <div className="GrandSlide-img">
            <AnimatePresence initial={false} >
              <motion.div
                key={currentIndex}
                className="slide-container"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -100 }}
                transition={{ duration: 1 }}
              >
                <Slide data={sliderData[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>
          </div>
          
          <div className="PetitSlide-pro">   
            <div className="bordure-droite"></div>
           
            {sliderDataThumbs.map((text,index) => (
              <div 
              key={index}
              className={`text-container ${index === currentIndex ? 'slideshow' : ''}`}>
                <div className="haut">{text.titre1}</div>
                <div className="bas"><span>{text.span}</span>{text.titre2}</div>
                <div className="volet">{text.volet}</div>
             </div>
           ))}
           <div className="bordure-gauche"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideProgramme;
