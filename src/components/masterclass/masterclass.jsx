import React, { useState , useEffect} from 'react';
import MasterclassData from './masterclassData'; 
import MasterclassThumbs from './masterclassthumb';
import { FaCalendar, FaClock} from 'react-icons/fa';
import './masterclass.css'

const Masterclass = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Initialisé à 1
  const delay = 5000; 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === MasterclassData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? MasterclassData.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    // Démarrez le défilement automatique lorsque le composant est monté
    const intervalId = setInterval(nextSlide, delay);

    // Arrêtez le défilement automatique lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="MasterClassSlider-section">     
        <div className="Masterclass-bg">
          <div className="slider-container">
            
            {/* <div className="image-info">
              <h2>{MasterclassData[currentIndex].title}</h2>
             
            </div> */}
            {MasterclassData.map((slide, index) => (
                <div
                  key={index}
                  className='image-info'
                >
                  <h2 className={`image-title ${index === currentIndex ? "imageTitleActive" : ""}`}>{slide.title}</h2>
                </div>
              ))}
            
            <div className="thumbnails-container">
            {MasterclassThumbs.map((thumb,index) => (
            <div id="thumbnails"  
              key={thumb.id}
              className={index=== currentIndex ? 'actif' : ''}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="thumbnail-titre">{thumb.title}</div>
              {/* <div className="thumbnail-speacker">
                <span className="thumbnail-image">
                    <img src={thumb.src}  alt={`Thumbnail ${index}`}/>
                </span>
                
                <span>{thumb.name}</span>
              </div> */}
              <div className="thumbnail-date"> {thumb.date}</div>
              <div className="thumbnail-heure">{thumb.heure}</div>
                
            </div>
          
            
              ))}
            </div>     
          </div>
          {MasterclassData.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={`Slide ${currentIndex}`}
              className={`fade-in-up ${index === currentIndex ? 'imageActive' : ''}`} 
            />
          ))}
           
        </div>
         

    </div>























  );
};

export default Masterclass;
