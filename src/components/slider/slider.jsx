import React,{useEffect,useState} from "react";
import { motion,AnimatePresence } from "framer-motion";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import './slider.css'
import image1 from './org-photo/org1.png';
import image2 from './org-photo/org3.png';
import image3 from './org-photo/org4.png';
import logo1 from './org-photo/logo1.jpg';
import logo2 from './org-photo/logo2.jpg';
import logo3 from './org-photo/logo3.png';
import logo4 from './org-photo/logo4.jpg';
import logo5 from './org-photo/logo5.png';
import logo6 from './org-photo/logo6.png';
const Slidercomponent = () => {
  const sliderData = [

    {
        id: 1,
        image:image1,
        title:'ORIGAMI TECH',
        text: 'Une entreprise de communication digitale, basée à Fianarantsoa depuis 4 ans , ayant comme vision ambitieuse d’ être le catalyseur du succès en ligne des clients, en les aidant à atteindre leurs objectifs et à se démarquer dans un monde numérique en constante évolution.',
        
    },
    {
        id: 2,
        image:image2,
        title:'LAMSECK',
        text: 'Une entreprise de communication digitale, basée à Fianarantsoa depuis 4 ans , ayant comme vision ambitieuse d’ être le catalyseur du succès en ligne des clients, en les aidant à atteindre leurs objectifs et à se démarquer dans un monde numérique en constante évolution.',
        
    },
    {
        id: 3,
        image:image3,
        title:'ENI',
        text: 'Une entreprise de communication digitale, basée à Fianarantsoa depuis 4 ans , ayant comme vision ambitieuse d’ être le catalyseur du succès en ligne des clients, en les aidant à atteindre leurs objectifs et à se démarquer dans un monde numérique en constante évolution.'
       
    },
    {
        id: 4,
        image:image2,
        title:'EMIT',
        text: 'Une entreprise de communication digitale, basée à Fianarantsoa depuis 4 ans , ayant comme vision ambitieuse d’ être le catalyseur du succès en ligne des clients, en les aidant à atteindre leurs objectifs et à se démarquer dans un monde numérique en constante évolution.'
    },
    {
        id: 5,
        image:image3,
        title:'MADE IN MADA',
        text: 'Une entreprise de communication digitale, basée à Fianarantsoa depuis 4 ans , ayant comme vision ambitieuse d’ être le catalyseur du succès en ligne des clients, en les aidant à atteindre leurs objectifs et à se démarquer dans un monde numérique en constante évolution.'
        
    },
    {
        id: 6,
        image:image1,
        title:'TSARASOA LABEL',
        text: 'Une entreprise de communication digitale, basée à Fianarantsoa depuis 4 ans , ayant comme vision ambitieuse d’ être le catalyseur du succès en ligne des clients, en les aidant à atteindre leurs objectifs et à se démarquer dans un monde numérique en constante évolution.'
       
    }
];
const sliderDataThumbs = [

  {
      id: 1,
      logo:logo5
  },
  {
      id: 2,
      logo:logo2
  },
  {
      id: 3,
      logo:logo3
  },
  {
      id: 4,
      logo:logo4
  },
  {
      id: 5,
      logo:logo1
  },
  {
      id: 6,
      logo:logo6
  }
];
  const [currentIndex, setCurrentIndex] = useState(1); // Initialisé à 1
  const delay = 18000; 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    // Démarrez le défilement automatique lorsque le composant est monté
    const intervalId = setInterval(nextSlide, delay);

    // Arrêtez le défilement automatique lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);
 
  

  return (
    <div className="slider-section">
        
        <div className="pro-about-titre org">
            <h2>Organisateurs </h2>
        </div>
        <div className="slider-content">
        <div className='slider-photo'>
              {/* <img src={sliderData[currentIndex].image} alt={`Slide ${currentIndex}`}  
               className={`fade-in-up ${currentIndex === 0 ? 'photoActive' : ''}`}
               /> */}
               {sliderData.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={`Slide ${index}`}
              className={`fade-in-up ${index === currentIndex ? 'photoActive' : ''}`}
            />
          ))}
             </div>
             <div className="slider-about">
             {sliderData.map((slide, index) => (
                <div
                  key={index}
                  className='slide-descri'
                >
                  <h1 className={`slider-title ${index === currentIndex ? "titleActive" : ""}`}>{slide.title}</h1>
                  <p className={`slider-text ${index === currentIndex ? "textActive" : ""}`}>{slide.text}</p>
                </div>
              ))}
               
            
              
            
          

             


              <div className="slider-thumbs">
               {sliderDataThumbs.map((thumb,index) => (
                <div id="thumbs"  
                  key={thumb.id}
                  className={index=== currentIndex ? 'thumbsActif' : ''}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={thumb.logo} alt="" />
           
                </div>
                ))}
              </div>
             </div>  
        </div>
         {/* <button className= 'slider-button' onClick={prevSlide}>
         <FaAngleLeft />
         </button>
         <button className= 'slider-button' onClick={nextSlide}><FaAngleRight /></button> */}
       
     

    </div>
  );
};

export default Slidercomponent;
